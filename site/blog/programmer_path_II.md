---
layout: post.ejs
title: Programmer Path II - Oliver Xie
description: "Part 2 in Oliver's path to becoming a programmer - the first year of university."
---
# Programmer Path II

Go back to [Part 1](/blog/programmer_path_I).

The second entry in this series recounts my first year at Simon Fraser University (SFU). SFU uses a trimester system; I took courses during my entire first year.

## Fall 2019
In my first semester at SFU, I took 5 classes, served as the First Year Representative for the Computing Science Student Society (CSSS), and worked on a personal project to support my video game streaming.

### Academics
After a two-year hiatus from programming, I was back to programming. Thanks to some quick Java review over the summer, I took a test to skip the intro to programming course (CMPT 120). While I lost a GPA-booster course, I learned about Python from other courses and building my own projects. 

- CMPT 125 (intro to data structures and algorithms)
- CMPT 127 (intro to C programming)
- MACM 101 (discrete mathematics I)
- GEOG 100 (intro to human geography)
- STAT 270 (intro to probability and statistics)

A cool thing that CMPT 127 had was a live leaderboard. Each week, there was a lab suite. Each suite was broken into sub-components: every sub-component started with a red box and when you submitted a solution that the auto-grader accepted, the leaderboard updated it to green.Unforunately, this course is no longer offered at my university. Since this practical course was scrapped, there has been an uptick in students who reach second-and-third year courses who are totally helpless in the Linux terminal. While resources like [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/) allow students to self-learn key fundamentals, there is an opportunity for senior students to share their expertise and step up to fill the void left by the university. 

### Projects
Around the end of the semester, I applied to join the co-op program and realized that building personal projects would make my resume stand out. I started speedrunning Pokemon Super Mystery Dungeon that summer and still had enough time to stream occasionally in my first year of university. Hence, I decided to write a bot for my Twitch channel using C++. It was pretty janky as it ran in debug mode out of Visual Studio on my computer but it helped me get to Affiliate. Unfortunately, it broke shortly after.

The bot's main attraction was a guessing-game where people in chat could guess the name of a dungeon (a stage) in the games. Points were awarded based on time (faster = more points) and I stored chatters' scores in a text file (real resilient, I know). Because I didn't know about higher-level abstractions, I used sockets to manage direct connections to the Twitch IRC API and threads to handle those blocking blocking network calls.

Since then, I built many more projects which you can read more about on the [projects page](/projects).

### First Year Representative
Somehow, I got elected as one of the two First Year Representatives for the CSSS. Organizing a LAN party for the first-years was cool but involved a lot of paperwork and emailing. I was also exposed to the realities of a commuter school: while students are free after 5:30, most left campus by then because there weren't too many things to do there.

## Spring 2020
I had a fruitful first semester at SFU and hoped that it would continue. Unfortunately, COVID became a big problems midway through.

One highlight of the semester was walking up Burnaby Mountain in the snow. As I had an assignment due that evening and the buses were not running when I reached the station, I took matters into my own hands. While I met the deadline, I got passed by a bus on the way up.

### Academics
- MACM 201 (discrete math II)
- CMPT 225 (data structures)
- CMPT 295 (computer engineering)
- GEOG 324 (geographies of transportation)
- EDUC 100W (selected writings in education)

While I enjoyed the low difficulty of the data structures class, it was the only course where I considered sleeping through lectures because of how dry they were. I would never again be burned by instructor choice due to my priority enrollment. 

## Summer 2020
This was the first fully remote semester of the pandemic. I took four courses, sought my first co-op, and served as a CS Peer Tutor.

### Academics
- MATH 240 (linear algebra)
- CMPT 276 (software engineering)
- CMPT 383 (programming languages)
- POL 101 (intro to political science)

For the software engineering class, I worked with a team to build an employee training-scheduling web app using a Node-Express-EJS-Postgres-socket.io stack. Having an external party define requirements felt more realistic (unlike most class projects where the implementers make all product decisions). To make things even more real, two out of the original five members dropped the course after the midterm so I got the full deliver-under-reduced-headcount experience. 

The programming languages course was also heavily project-based and taught me a lot about realistic software development. While I didn't do that well in the programming languages course, I really enjoyed the lecturer due to his course materials, depth of knowledge, and rigorous projects. I really appreciate how he required us to use at least two different ways of communicating between languages such as a foreign function interface, RPC/API, or shared files. Turns out application integration is a pretty big deal.

### CS Peer Tutoring
CS Peer Tutoring is a volunteer program where upper-year students help students in select first-and-second year courses with their assignments or understanding of course material. I learned to see students' mistakes, figure out the likely cause, and hint the student without giving away the answer. Besides being satisfied after helping students improve, I also honed my code-reading.

### First co-op hunt
Without any prior technical experience, I elected to search for a co-op job through my school's job portal. This was advantageous because the pool of applicants was smaller and I stood out more. With more experience, not relying on the co-op office is well worth it because there are so many more postings, the companies are more prestigious and pay better, and the co-op office's support is not that useful any more.

I was very lucky with referrals. Two of my interviews were due to my connections and by reaching out to others who interviewed previously with other companies, I prepared better. For many small and mid-sized software companies/divisions in Vancouver, referrals are a **big deal** because the chances of an interview are significantly higher.

I did not have to do any online assessments for these companies. The technical questions they asked also heavily focused on trivia (sample question: what is the difference between a process and a thread?) instead of LeetCode. Only bigger companies such as Intel asked me to do a whiteboard-style virtual coding interview.

The first offer I received was from the local Change Healthcare division. As the co-op office requires students to accept offers within 24 hours of receipt, there was no opportunity for negotiations (which is why the office becomes less useful for more experienced job seekers).

[Part 3](/blog/programmer_path_III) is about my second year at SFU and my co-op term at Change Healthcare.