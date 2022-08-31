---
layout: post.ejs
title: Programmer Path III - Oliver Xie
description: "Part 3 in Oliver's path to becoming a programmer - the first co-op work term."
---
# Programmer Path III

Go back to [Part 2](/blog/programmer_path_II).

The third entry in this series recounts my second year at Simon Fraser University (SFU). I took an eight-month co-op at Change Healthcare and took classes during the Summer 2021 semester.

## The co-op experience
After a year of classes, I was excited to try something different. Both my parents work in the software industry so I wanted to see what the developer experience was like!

I was hired as a Software Development Engineer co-op at Change Healthcare. The Richmond, BC office primarily develops radiology software such as a picture archiving and communication system (PACS).

### Month 1: Onboarding
Unlike other companies that promised new recruits that they could be committing code as early as the first week, I knew that healthcare companies would move slower. As patient safety is paramount, there are well-documented processes that values correctness over velocity.

What I didn't expect is how many standard operating procedures (SOP) and documents there would be. Sure, a developer's job involves reading, but I was expecting to read code, not just docs. Trying to understand the different categories of tickets and hopping around trying to discover if there was any documentation from similar past issues was also exhausting.

Setting the development environment took more time than I expected. Unlike the platform-agnostic open-source tooling I used before, the company spent at least 2 weeks wrangling the necessary Visual Studio 2019 license for my laptop. Ironically, that license wasn't totally necessary because all real development work had to be done on a dev workstation running Windows VMs. Of course, different components of the software had to be compiled with varying versions of the Microsoft Visual C++ runtime, .NET Framework, and Visual Studio.

I'm glad my mentor was well versed in building the project as he wrote some scripts to automate the process. His expertise saved me lots of time having to rebuild from scratch every time.

### Month 2-3: Bug fixes
By the end of the first month I pushed my first code change which resolved memory leaks in a Windows socket component (glad I worked with them in my very first project). Not bad except that if my environment variables were configured properly, I would have fixed the bug even faster.

While fixing bugs was a priority, I discovered that porting bug fixes to different software versions was critical to on-premise software development. I fixed a couple of newly-discovered bugs in C/C++ and C# components with the aid of static analysis tools but thankfully most of the tickets I resolved were related to bugs being fixed in a newer version that should be applied to older versions.

I was getting used to this mundane, peaceful routine when things changed.

### Month 4: Migration project planning
At the start of December, I was assigned a new project: to migrate an old version of Identity Server (running on an end-of-life ASP.NET Core version) to a safer, newer version.

The different software components of the .NET ecosystem are obvious to me now, but figuring them out for the first time was mind twisting. For reference:
- .NET Framework is the Windows-specific runtime. The company had some systems using this runtime which were out of scope of my upgrade.
- .NET Core is the cross-platform runtime that Microsoft focuses a lot of development effort on. Some .NET Framework APIs are not present in .NET Core.
- .NET Standard is intended for libraries that are compatible with certain versions of .NET Framework and .NET Core.
- ASP.NET Core is a web server framework that runs on .NET Core (similar to ASP.NET, the equivalent framework running on .NET Framework).

Version numbering added to the confusion. .NET Framework went up to 4.8, .NET Standard went to 2.1, and .NET Core skipped major version 4. Regardless, I figured out the upgrade pathway, got senior leadership to sign off, and began upgrading the affected components.

### Month 5-8: Migration project execution
Once I had the target runtime version figured out, I realized the actual upgrade was more involved than just running a portability analyzer and changing the dependency version numbers for our external dependencies.

The key challenge was figuring how to replicate the ASP.NET Core 1.x environment in a more recent version. The framework evolved a lot and its conventions changed - however, someone coming from unopinionated Express used in a class project also had to learn dependency injection and logging. Setting up the DI services and preseving the previous logging output when the server startup changed significantly proved to be difficult but solvable.

By the end of the co-op I was code complete. As code reviews started later than expected, testing and release was finished after I left.

### Conclusion
I had the option to extend my co-op but declined because I already spent eight months at Change Healthcare and I wanted to explore other places. My manager praised my performance as being one of the best he ever encountered. 

At the time, I felt I did a good job as a first-time co-op. Looking back, I feel I was given a good project that exposed me to the realities of enterprise web backend software development. I wanted to continue working on these kinds of systems as I always liked building the behind-the-scenes that gets the job done.

## Summer 2021
One of the most academically intense semesters of my entire undergrad career but I survived. I also found time at the end of the semester to be a HIVE Leader (virtual orientation guide) for Fall 2021.

### Academics
- CMPT 379 (compilers)
- CMPT 300 (operating systems)
- CMPT 354 (databases)
- CMPT 353 (data science)

With work experience under my belt, I knew that school courses wouldn't provide all the skills I needed to succeed once I graduate. Moving forward, I focused on understanding what I felt was crucial and didn't stress if it took me longer than expected to absorb lessons from coursework, lecture, or readings. After all, learning is not a sprint: in this industry, sustaining continued learning is crucial.

### HIVE Leader
Being a virtual orientation leader forced me to think about how I got to where I was so I could help others achieve their potential. It was also a welcome change from Peer Tutoring as the focus was not exclusively on coding. Around this time I also discovered other "programmer path" testimonies which inspired me to begin working on my own.

[Part 4](/blog/programmer_path_IV) is about my third year at SFU and my summer internship at Amazon Web Services.
