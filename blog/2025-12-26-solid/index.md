---
slug: now-i-get-solid-principle
title: "Now I get why people use SOLID principle (I guess)"
authors: [amf]
tags: []
draft: true
---

For past few weeks, I have been tasked to handle data synchronazation and injection to our database. The bussiness goal is to take purchase transaction of customers from datamart, sync into our staging database, inject to our production database then reward them with points that can be redeem in our mobile app. Then I start developing related engine to handle that which can be trigger by API call or cronjob. Prior to the moment of reliazation, I usually create my function/controller traditionally without caring much about solid principle.

## First issue when in testing staging:- tightly coupled app
As the task complexity is quite challenging, as at worst case scenario, I will need to manually checked, up to 16 tables per one injected entry from datamart. And I also facing replication error due to multiple connection to database server due to a lots of tabs that I need to open to verify the process. I thinking that I should invest some time to do testing, integration testing to be specific. So that whenever I make change to the logic of my engine, I would not need to manually check all related tables.

<!-- truncate -->
As our app were build on Javascript, SOLID principle are not popular among this spaces as Javascript is not purely build with object oriented programming (OOP). Thus, most Node.js app is tightly coupled built, and so do my engine/controller part. But it cause some challenges when I try to do testing with Jest. I need to hack around during app initiation, by creating server.test.js file instead of using original one as it cause a lot of run time error when I run it with Jest. And also Jest kind of very strict about reserved words as part of the app use "arguments" word which is one of reserved word in Node.js which I need to mock those part as it not related to my test. I also need to make my part lously couple too so does it easier when I want to do mocking during testing.

### SOLID Principles in Simple Terms

:::note

**S — Single Responsibility**  
A class should only do **one job**.  
_Example:_ Don’t make a toaster that also prints documents.

---

**O — Open/Closed**  
Code should be **open for adding new things**, but **closed for changing old things**.  
_Example:_ Like adding a new phone case without modifying the phone.

---

**L — Liskov Substitution**  
If a part of your app uses a parent class, it should also work fine with a child class.  
_Example:_ If a Bird can fly, a Duck (child of Bird) should fly too — or don’t make it a Bird.

---

**I — Interface Segregation**  
Don't force something to use features it doesn't need.  
_Example:_ A coffee machine shouldn’t be forced to scan documents.

---

**D — Dependency Inversion**  
Depend on **abstract things**, not concrete ones.  
_Example:_ Use a universal charger plug, not one hard-wired only for iPhone.

:::


## My brain just clicked with SOLID principle
Prior to that event, I have learned some clean architecture which one of practical application of SOLID principle. I just follow blindly and wonder why some developers come to this extend to just make one features. Expecially dependecy Inversion principle (DIP) from SOLID. I questioned why not just call directly the function if the function if same file. 

But now all just make sense why when I required to do dependecy injection to my engine/contorller as I make it lously couple to make my testing work. It easier for me to mock some function, like I can just mock the API call to bigQuery where I retrieved datamart data, so I will always expect no change in my test. But what if datamart data change it shape, like change the key name or field? I just counter it by making other test just to test the shape of the datamart data, so that whenever it failed, I knew the data shape just changed.

I also easily just do dependecy injection for sequeilize model that used in my engine/code, as there is slightly different naming convention of sequelize model in app and testing enviroment. In app enviroment, it use pascal case while in test enviroment, it use snake case as I automate the database setup which it using file name. If I not make my part lousily couple, it will failed as it will raise table is not found error.


### Testing somehow make me better developer
When I do integration testing, I will do development with include testing into account and will uncounsiouly applied SOLID principle, at least dependecy inversion principle one. SOLID principle might be tedious and over engineering to some extent, but does not mean we can apply part of it when needed right?

