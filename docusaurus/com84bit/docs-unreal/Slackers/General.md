---
  title: General
  description: General
  sidebar_position: 1
  sidebar_label: General
---






https://docs.unrealengine.com/5.0/en-US/unreal-engine-for-unity-developers/
https://landelare.github.io/2022/07/16/unity-starter-pack.html



Unreal Engine 4: Should I Use Blueprints or C++? (tl;dr; Answer is Both)
https://www.youtube.com/watch?v=flEtQBPtBTc



Interested in learning more about the Lyra starter game? Check out these in-depth tech talks from Epic!

Lyra Starter Game Overview: https://www.youtube.com/watch?v=Fj1zCsYydD8
Lyra Cross-platform UI Development: https://www.youtube.com/watch?v=u06GAVxyIag



https://dev.epicgames.com/community/learning/courses/ZpX/your-first-hour-in-unreal-engine-5/E7L/introduction-to-your-first-hour-in-unreal-engine-5



https://www.youtube.com/watch?v=eviSykqSUUw&start=4134





anchorlight:
My advice for a simple starting project is to write yourself a list of game-y mechanics that you can reasonably squeeze into a Project Template.  For example, here's one you can do with the Third Person template:

3D Obstacle Course Platformer
In the process you'll need to:
-Make a course using the BSP tools
-Make taller platforms you have to jump up to, also using BSP tools
-Cut a tunnel shape out using the Subtraction mode (again, BSP tools)
-Make platforms move by scripting them and setting them to Movable
-Add Collectible blueprints that are collected by the player on touch
-Add hazards that reset the player
-Reset the player if they fall
-Add a win condition at the end
-Add a HUD with a timer and collected items

Gold Plating:
- Add health to the player, and kill the player on 0 HP
- Add speed boosts
- Add health pickups that respawn after a few seconds
- Add wind gust zones that impulse the player to jump extra high on entry
- Add enemies that follow the player to hurt nearby players or explode
- Make enemies only react if the player approaches a larger surrounding volume






Doğa:
For people getting DXGI_ERROR_DEVICE_REMOVED crashes with Windows 11 / DirectX 12 on Unreal 5 projects, that's a known issue for rtx 3000 cards and it's a driver issue. Unfortunately, it's unknown when Nvidia will fix it.

https://github.com/dyanikoglu/UnrealEngine/commit/6b6f4f77363865fb818df642e64a5522f5ed624d (dependency for actual fix)

https://github.com/dyanikoglu/UnrealEngine/commit/546c84799cfdfb2b6d5b06e829c9230dcdd56d73

If you're using source build, just cherry pick those commits as temporary fix (they're from ue5-main), or wait for 5.1 release.

Edit: Fix verified with newest Nvidia Driver, see https://github.com/EpicGames/UnrealEngine/commit/d08d7c9f5720516600a8387f58cd870159b7ed65

Edit 2: Newest Nvidia driver 516.94 broke this again. 





The replacement of tessellation (on terrain) in UE5 is called "virtual heightfield mesh"

https://www.youtube.com/watch?v=IUOnqGOdyoE 
YouTube



fix for NVidia flickering:
https://nvidia.custhelp.com/app/answers/detail/a_id/5157 



https://docs.unrealengine.com/5.0/en-US/advanced-search-syntax-in-unreal-engine/




How to use Version control/Back-up systems to save yourself from losing your work!
https://www.ue4community.wiki/every-project-needs-a-version-control-system-qgpkrft2
https://timdhoffmann.github.io/setting-up-ue4-project-for-git-version-control/
https://www.reddit.com/r/unrealengine/comments/4xsyw9/source_control_in_ue4_for_small_teams/
https://odederell3d.blog/2020/04/22/unreal-engine-4-github-first-steps/
https://docs.unrealengine.com/en-US/Basics/UI/SourceControl/index.html

Cheap version control hosting:
https://www.digitalocean.com/community/tutorials/an-introduction-to-managing-secrets-safely-with-version-control-systems 





https://youtu.be/3jM_VLzRqlE?t=4588






Here’s your care package to get started.
- https://www.raywenderlich.com/771-unreal-engine-4-tutorial-for-beginners-getting-started
- https://www.unrealengine.com/en-US/onlinelearning-courses
- https://m.youtube.com/channel/UCOVfF7PfLbRdVEm0hONTrNQ
- https://docs.unrealengine.com/en-US/index.html
- https://www.youtube.com/user/UnrealDevelopmentKit/playlists?view=50&sort=dd&shelf_id=17 



https://www.unrealengine.com/en-US/support/report-a-bug
https://epicsupport.force.com/unrealengine/s/ 


https://docs.unrealengine.com/en-US/index.html



If you decide you want to include it, see this page: 
https://www.unrealengine.com/en-US/branding


http://www.starcomnexus.com/what-goes-into-making-a-game-besides-the-game/




If you are sending your resume to apply for a Game Design position anywhere, and you are fresh out of school, read this:
https://twitter.com/kurtmargenau/status/1364736818046926849

also, use artstation!

and watch these "Killer Portfolio or Portfolio Killer" videos!
https://www.google.com/search?q=portfolio+killer+or+killer+portfolio 


https://remotegamejobs.com/

speaking of teams reddit has this subreddit just for mostly people with no experience come together to make something 
https://www.reddit.com/r/INAT/



Can I use marketplace products in other gaming engines, like Source or Unity?
https://marketplacehelp.epicgames.com/s/article/Can-I-use-these-products-in-other-gaming-engines-like-Source-or-Unity?language=en_US 




PSA for creators: use Asset Guidelines

I see quite a few products on the MP that relies on some plugins that are disabled by default, so the creator has to add in all caps and bold in the product description that users need to enable such and such plugins first. But even so, they'll end up with questions or even bad reviews because it doesn't work straight out of the box.

UE5 added something for that: Asset Guidelines. This tweets below sums it up nicely, so just watch the video. But basically, you can add dependencies to plugins or project settings for your assets, and users will get a popup offering them to enable all those. It works great, but since I just wasted a couple of hours on that, I can tell you that for project settings, it only works for console variables and nothing else.

https://twitter.com/games_inu/status/1526509074036187137



Also, as a general FYI, the best place to make us aware of issues related to marketplace is here: https://marketplacehelp.epicgames.com/s/markeplace-case-form




Alternative marketplace website, its legit, just another front-end with some QOL things.
https://orbital-market.com/ 





We talked about it yesterday, so here it is: 

Unreal Marketplace Vault Extractor, a script to generate a list of your Marketplace Vault
https://github.com/brifsttar/UnrealMarketplaceVaultExtractor

As I mentioned earlier, it sadly isn't exactly plug-and-play, as the end-user has to request the json data themselves. I tried making it as straightforward as possible, but still. Feel free to ask questions, contribute, etc.



Here you can find information about buying and selling on the UE Marketplace: https://marketplacehelp.epicgames.com/s/?language=en_US



"Fundamentals of Modular Kits" by Luan Vetoreti
Learn how to approach the creation of modular assets...

https://twitter.com/exp_points_int/status/1364851023425269761



https://www.udemy.com/course/unrealcourse/?ranMID=39197



marketplace api
https://docs.google.com/spreadsheets/d/1a-sJ0cvmgSiXToD1GxjCED6e1993ZytTB5oAZ9bb8YM



For those who look through website
https://unrealengine.com/marketplace/en-US/event-sale?count=20&sortBy=effectiveDate&sortDir=DESC&start=0

Change the count=20& to count=99& and reduce the amount of pages from 248 to 50. You're welcome! 



NamelessVoice:
I wrote a guide on submitting products to the Unreal Marketplace: https://blog.nameless.zanity.net/?p=179
