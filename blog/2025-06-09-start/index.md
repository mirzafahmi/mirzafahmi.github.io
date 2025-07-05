---
slug: what-made-me-start-programming
title: What made me start programming?
authors: [amf]
tags: [dev-story, motivation, programming-journey]
---

It all started in June 2022 at my last job, I guess. At that time, I had already been at my first job for over a year. The main business of the company was manufacturing medical devices — one of the top players in Malaysia too.
Due to the nature of the small-medium enterprise (SME), most of us were assigned multiple portfolios, including me and the most senior staff member there. He had also been my desk neighbor for the duration I had been working there.

## _"There Must Be a Better Way to Do That"_ Moment

One day during the peak of COVID cases around the world, test kits for COVID were limited. There was an influx in demand domestically and internationally. We got some orders from Hong Kong or Taiwan, if I'm not mistaken. But to properly pass customs clearance and deliver to the customer, each carton of that particular test kit had to be attached with 2 documents: a commercial invoice (CI) and packing list (PL). The tricky part was that if we had 40 cartons for shipment, 40 sets of documents had to be generated. It might seem like just 40 sets, but it took over 2 hours, resulting in teary, red eyes and neck pain for my colleague to finish that task. Yes, the document generation relied on Microsoft Excel as a template, with values manually changed for each customer.

<!-- truncate -->

## The Programming Journey Begins

On my way home, I thought about that encounter and started googling about the issue once I reached home. During that time, there was no ChatGPT yet, so I just relied on knowledge scattered around the web. One solution was using a built-in approach in Microsoft Excel called `Range Names`, if I'm not mistaken. It did the work, but there was one issue with that approach — I needed to manually save the generated documents one by one, which was tedious to me.

#### But I Wasn't Satisfied with That Way of Doing Things

Then I started with another solution using `Python`, `Pandas`, `Openpyxl`, and `Win32com` specifically. During that time, I had some coding knowledge in `JavaScript`, but mostly in the frontend spectrum. So, I just copied and pasted scripts that I randomly found on the web, without understanding or learning `Python` during that time. I just changed some parts of the code by trial and error until I got the results I wanted. My plan for that script was to read a customer list Excel file and map the info with the document Excel template, then save the generated documents as PDFs.

#### The Feel of First Dopamine Hit from Coding

After hours of trial and error, my script worked and successfully generated 40 sets of documents with just one command. Not just that — the generated documents were also saved with customer names in PDF format. At that moment, I felt something more significant than when I first started learning programming. When I first learned programming, I mostly learned about the frontend spectrum. It just felt like something was missing, as it lacked functionality, something that could help solve real problems I faced in real life. It's not that I'm saying learning frontend/web development is a waste of time, but it just feels incomplete without the backend.

With backend development, I began to understand how data moves, how logic is processed, and how real-world problems can be automated and scaled. It gave me a sense of control and purpose that frontend alone hadn’t fully delivered. That experience sparked a shift in my mindset — from building interfaces to building solutions. It was the first time I saw programming not just as code, but as a powerful tool to solve meaningful problems with real impact.

#### From 2 Hours of Work Reduced to Just Merely 1 Minute...

A short while after that event, there was another order from the same country. Without hesitation, I offered to help my colleague test the script that I made. I made some adjustments to the customer list to ensure the column names in the Microsoft Excel file were compatible with my script, then voila... With one command, taking merely 1 minute (ignoring the customer list file adjustment), 40 sets of documents were generated and saved in PDF format, ready to be printed. I felt the high that fellow programmers chase, I guess. Yes, I know if you include the customer list file adjustment, it could take around 5-10 minutes, but that's still ~90% time savings. Then, that script was also used for other similar orders, and I made some final modifications plus created a `Bash` script to make it easier for my colleague to use with just one click. I passed that script to my colleague before I left the company, and it's still being used there (hopefully).

## It Didn't Stop There

I started learning `Python` from scratch, mainly through YouTube and freeCodeCamp courses. I spent at least 1 hour per day on weekdays and 2-4 hours on weekends consistently. The process went smoothly due to my prior knowledge of `JavaScript`. Then I had big plans to use the power of my new knowledge in `Python` to make my day-to-day job easier.

Another script was made, this time related to summarizing sales reports generated from accounting software in `csv` format. Well, it was easy to do as `Python` has an excellent library named `Pandas` that does well in data cleaning and analysis. Previously, during my time learning `JavaScript`, I had a hard time understanding OOP, Class, constructor, etc. But this time, I stumbled upon a use case for OOP, where I needed to create modules for that script so I could reuse it to read, clean and summarize the sales report based on quartely interval. Learning anything is so much better when you have a situation to use it. Then, whenever I needed to see sales patterns or do sales forecasting for restocking, it was just one click away. I experimented with various modules I made to summarize based on brand, product, customer, etc.

## Day-to-Day Job Got Easier

I got comfortable with my `Python` skills and started working on a bigger dream project that I wanted to do during that time, which was to digitalize and automate the raw material inventory that fell under my portfolio. I started small, converting physical records from a pen and paper method to digital records in Microsoft Excel/Google Sheets. Note that during that time, I didn't know anything about other backend technology stacks and database technology. So technically, Microsoft Excel/Google Sheets were both frontend and database to me. During that time, I was okay with that as I wanted to gradually change things, and other people involved in keeping records were more familiar with that compared to if I introduced a new way of keeping records.

The records were kept based on products, with each file having multiple sheets based on their components and batches. Let's say if a product had 5 components, and 3 of those components had 2 batches, the total would be 8 sheets. At times, we had up to 20 sheets just for one product. Imagine having to manually open it to do a summary or, worse, handle an urgent inquiry from the sales team.

#### Why Were Inquiries from the Sales Team Considered Worst-Case Scenarios?

This was one of the reasons why I wanted to digitize this inventory system. If I were late in responding to the sales team regarding their inquiry, we could lose sales, and my boss would come looking for me. Need to remind you again that I handled multiple portfolios, so sometimes I couldn't respond to inquiries quickly, and even when I wanted to, it could take some time depending on the level of inquiry.

Thus, I spent hours of my free time, on weekdays and weekends, creating these scripts. With just `Python`, `Pandas`, and some numpy, my ultimate dream at that time was born. Now, with just one command in the terminal, I could summarize all of our available products that were ready to produce. I also upgraded it to integrate with Google Sheets for the warehouse stock list so all other stakeholders could access it. During this, I learned deeper about Object Oriented Programming (OOP), `Pandas` DataFrame, dynamic variable names in class, etc. Yes, I never thought we could make variable names dynamic. Those scripts boosted my and my colleagues' productivity drastically because they not only helped the sales team but also helped the procurement and accounting teams. For the accounting team, these scripts helped with accessing the current assets (at least for raw material inventory stock) for audit purposes, while for the procurement team, they helped in offsetting the forecasting values made in other scripts, so the forecast would take the raw material stock into account.

Other than that, I also created a Telegram bot for the sales team's use. The reason was that every day, I got tons of chats from them asking about delivery charges for certain products to certain places. So, I made a bot for them to just input the quantity of product brands (because most of our products followed standardized brand packaging) and destination, whether to Peninsular Malaysia or East Malaysia. But one shortcoming was that I didn't have any knowledge of DevOps during that time, so I just hosted my bot locally and was only able to deploy or run it during office hours. Well, at least part of the problem was solved, even with just basic bots.

#### Scripts Are Not Sustainable

One and a half months before my last day at that company, I found it difficult to pass my scripts to my successor. This was because my scripts relied on some programming knowledge to work with and to add new products if applicable. So I start to build the CMS style webapp using `Django`, with some `jQuery` for better user experience. My plan to make the webapp become centralized documention for production department to log their raw material stock inventory and I also create for IT department to centralized the assets documentation for company laptops etc. Due to time constraint, I was only able create basic functionality that comparable with current system of Excel/Google sheet with `Python` script, but not as the full version that I planned to create. Also during that time, I did not have any experience in deployment/DevOps, so I just deploy in one desktop that we used as server for accounting software but it is enough for other colleagues to access it if they connected to the company wifi/network.

## Building with Purpose: The Start of Something Bigger

Looking back, the experience taught me far more than just writing scripts or building web applications — it gave me a deeper understanding of how technology can create real, lasting impact within a team or company. From struggling with manual tasks to automating workflows and building tools for others, I began to see how code could scale solutions beyond myself. Although I couldn’t complete everything I envisioned, the progress I made — from isolated scripts to a multi-user webapp — marked a turning point in my journey as a developer. It solidified my interest in backend development, system design, and solving practical problems through software. More importantly, it showed me that even small, imperfect steps can lead to meaningful change — and that’s what continues to drive me forward. 

> **"Start where you are. Use what you have. Do what you can."**
>
> — _Arthur Ashe_

And that’s how a simple need to save time opened the door to a career path I never imagined.
So… what real-world problem will your first line of code solve?