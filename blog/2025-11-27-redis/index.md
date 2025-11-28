---
slug: accidentally-use-redis
title: "How I accidentally use Redis (sort of)"
authors: [amf]
tags: []
---

Redis. I bet every software developer has heard of or used Redis in their project at some point. Or learn about it at least for the technical interview. However, not many have had the chance to use or utilize it as I have. Up to this point, I just know that Redis is an in-memory key-value store that can be used to implement queues and pub/sub messaging. Let me re-catch what Redis is. Redis is an open-source, in-memory, NoSQL key-value store used as a database, cache, and message broker. It's  an all-around software that can be used to cache or even as a  database (please don't do this).

## Redis help increase my API performance

- **0–1s — Instant Response:** Users expect immediate feedback or they assume the app is broken.
- **1–3s — Acceptable Wait:** Users tolerate a short delay if a loader or animation is shown.
- **3–7s — Attention Drift:** Users start losing focus and may shift attention elsewhere.
- **7–15s — Drop-Off Zone:** Most users abandon the task unless it’s very important.
- **15s+ — Abandonment:** Users fully disengage and won’t return to the action.

<!-- truncate -->

In my latest project, I encountered terrible performance on one of my API, which took almost 10 seconds to response due to media upload to the storage bucket. A brief stack about this project, it uses Python, Django, and Django Rest Framework as part of the backend which is mostly synchronous, so async support is limited without external tools. It is not acceptable for modern apps as it falls under "Drop-Off Zone" so I plan to handle the media upload in the background. Then I encountered one of the solution to use a queue like Redis. But Redis alone is not enough to handle background tasks reliably, that is why a worker like django_rq is required to execute the task.

![My Image](./django_rq.jpg)

I choose Redis due to its simplicity to set up and ease of integration with django using django_rq. It is also lightweight and suitable for my project due to server resource constraints. So I converted the  method related to the media upload into "task" using the django_rq packages. During the process, I also learn that uploading a big file can be broken into smaller chunks which makes the upload process more reliable so that if one of the chunks fails to upload, only that chunk will get retried instead whole file. It also reduces memory load, which is a big plus in my context due to limited server resource. Lastly, it also improve the user experience as it can give real-time progress feedback.

## It is easy to setup and run 

It can be deployed using docker-compose along with django server. This setup will be run with one worker.

```yaml
version: "3.8"

services:
  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data
    command: redis-server --bind 0.0.0.0 --requirepass testredis --protected-mode yes

  web:
    build: .
    ports:
      - "80:8000"
    env_file:
      - .env
    environment:
      - REDIS_URL=redis://:testredis@redis:6379/0
    depends_on:
      - redis
    command: >
      sh -c "python manage.py rqworker default & 
             python manage.py runserver 0.0.0.0:8000"

volumes:
  redis_data:
```

And you have this kind of API with method that handle something in background.

```python
def process_file_background(filename):
    # simulate long processing
    time.sleep(10)
    print(f"Finished processing file: {filename}")
    return f"{filename} processed!"

@api_view(["POST"])
def upload_file(request):
    filename = request.data.get("filename", "unknown.txt")

    queue = django_rq.get_queue("default")
    job = queue.enqueue(process_file_background, filename)

    return Response({
        "message": "File received. Processing in background...",
        "job_id": job.id,
    })
```
The server response will immediately return with 200 status while handling the task in the background as `queue.enqueue()` will handle called function in the background. Without this solution, my server will be blocked and take time to response for at least for 10 seconds.

## Wrapping Up

By combining Redis with django_rq, I was able to move slow, blocking operations into background workers without rewriting my entire stack to async. The performance improvement was immediate, the user experience became smoother, and the overall system became more reliable. It’s not the only solution but for Django projects with limited resources, it is definitely one of the most practical ones.
