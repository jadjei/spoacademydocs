---
title: Milestone 2 EoMC
---

1. Treasury Smart Contract (available to Catalyst reviewers on request):
 - Gitlab repository link or code files for the smart contract
 - Technical documentation describing the contract's functionality and integration with Andamio
2. Andamio Blockchain Functionalities (available to Catalyst reviewers on request):
 - Technical documentation detailing each implemented blockchain feature (smart contract functionally described)
 - Demo video or screenshots showcasing the functionality of each feature including the completed work on learner access control
3. Course Content:
 - Complete set of slide decks for all modules
   - 000 - This introduction will be a piece direct to camera with no slides planned
   - 100 (available to Catalyst reviewers on request)
   - 200 (available to Catalyst reviewers on request)
   - 300 (available to Catalyst reviewers on request)
   - 400 (available to Catalyst reviewers on request)
   - 500 (available to Catalyst reviewers on request)
   - 600 (available to Catalyst reviewers on request)
   - 700 (available to Catalyst reviewers on request)
 - List of all supplementary materials created
   - Spreadsheet of Modules (available to Catalyst reviewers on request)
   - [Pool Viability Strategy](https://docs.google.com/document/d/1rIT8vopADUWKVFRTADoCfdL0CxuSLxVzJcJx8jCg2Q0/edit?usp=sharing)
   - Miro for Modules 000 - 200 (available to Catalyst reviewers on request)
   - Miro for Modules 300 (available to Catalyst reviewers on request)
   - Miro for Modules 400 - 700 (available to Catalyst reviewers on request)
   - Miro for Slide Graphics (available to Catalyst reviewers on request)
   - [SPO Academy Project Documentation](https://catalyst.pages.fluid7.co.uk/spoacademydocs/docs/)
1. Video Content Pre-production:
 - Document containing all video scripts
   - M000 (available to Catalyst reviewers on request)
   - M100 (available to Catalyst reviewers on request)
   - M200 (available to Catalyst reviewers on request)
   - M300 (available to Catalyst reviewers on request)
   - M400 (available to Catalyst reviewers on request)
   - M500 (available to Catalyst reviewers on request)
   - [M600](https://docs.google.com/presentation/u/0/d/1SvVmjM_RPiUUWS9aijIlJ2rUYlKkotn6/edit)
   - M700 (available to Catalyst reviewers on request)
 - File containing all storyboards

     Creating full storyboards for the videos has proved unnecessary as the video introductions will be simple narrated talk throughs of the Slide decks listed above. Instead we have alloted more attention to lesson content creation, project documentation and an onboarding website.

5. Front-end Components:
 - Gitlab repository link or code files for the front-end components
   - https://github.com/jadjei/spoacademyapp
 - Screenshots or video demo of the implemented user interface
   - https://spo.academy/
   - https://app.andamio.io/course/9a597d0c2efb814a10c1e9ae7edfb25da1e7aaaa1a2c03e17e684e98


# Reviewer Comments and Team Responses

```
.) A few links don't seem to be working:
```

Apologies, all links should be publicly accessible now.
The Miro boards will need a password which has been supplied in the Milestone Module Evidence Submission.

```
.) I have found the pdf document for outputs 1 and 2 on the SPO Academy Project Documentation: https://catalyst.pages.fluid7.co.uk/spoacademydocs/docs/milestones/milestone2-eomc

    Could you point out each of the acceptance criteria that documents fulfills?
    I don't see any mentioning of pool registration system or course completion accreditation.
```

We have built the pool registration system into the onboarding website. Click 'Apply Now' to see it.

https://spo.academy/#cta

If budget permits, we may extend the proof of pool ownership validation to make use of Calidus keys which were not available when the proposal was written.

https://forum.cardano.org/t/new-calidus-pool-key-for-spos-and-services-interacting-with-pools/143812

Andamio makes credentials available upon successful course completion. Once a stake pool has completed the course assignments, credentials/accreditations are able to be claimed to participating wallets.

https://www.youtube.com/watch?v=0ls4uJnzxF8

```
.) Regarding output 5 (the Front-end components):

    They look fine for most of the parts. I do have some comments though:
    I don't see the sequential navigation feature described in milestone 1 (previous, next buttons).
    In the current side navigation bar, almost all modules have an empty subsection at the bottom of the module (e.g. after the subsection link "Introduction" in modules 000, 100 or 200). It is a clickable link of half the text size, but it doesn't have a text. I'm not sure if that's a placeholder or a UI bug.
```

The sequential next/previous buttons have been dropped from Andamio in favour of the accordion menu. We can add this sequential navigation into each lesson if it is decided they would benefit from them. That won't be implemented until Milestone 3 if it is deemed necessary though.

The small text like 'Introduction' under each of the Module menu entries is a placeholder for the lesson content. We are building the lesson content in Miro before transposing it into Andamio.

```
The GitLab repository just keeps loading forever. I tried this on a couple of browsers.
```

The repo should load eventually. First time loading for a new user does take some time unfortunately.
Try staying in the same browser and then reloading the page after a minute... a couple of times. I have allocated more memory to the gitlab server to try and improve responsiveness.
