# In-Game Advertisement Guidelines  

### Contents  

- [Available sizes](#sizes)
- [Placement](#placement)
- [Usage](#usage)
- References

---

### Available Sizes <a name="sizes"></a>

Clay.io provides 3 sizes for advertisements. Available sizes are:  

- 320 x 50 (banner)
- 320 x 480 (interstitial)
- 480 x 320 (interstitial, landscape)

### Placement <a name="placement"></a>

There are 4 placement configurations available.

Example | Title
--------|------------
![Alt text](https://github.com/claydotio/design-assets/blob/master/ad_guide_references/ban_top.png) | Banner Top
![Alt text](https://github.com/claydotio/design-assets/blob/master/ad_guide_references/ban_bttm.png) | Banner Bottom
![Alt text](https://github.com/claydotio/design-assets/blob/master/ad_guide_references/int_port.png) | Interstitial Portrait
![Alt text](https://github.com/claydotio/design-assets/blob/master/ad_guide_references/int_land.png) | Interstitial Landscape


Banner advertisements will always align to the very top or bottom of the view.

Interstitials will always overlay the entire view.  

### Usage <a name="usage"></a>  

To gain the most out of in-game advertisement it is important to display them in at the correct times. The best implemented ads remain unobtrusive so as not to annoy or turn away players.

It is recommended that ads not be displayed immediately. Players should be given the opportunity to experience part of the game before they are displayed. Ads displayed too soon may turn away new players.

Note, only one ad should be displayed at any given time.

Abuse of ads from Clay.io will result in access being rejected.

##### Banners  

Banner advertisements are the most common type of in-game ad. These ads perform best when placed at the top or bottom of game menus. It's advised that banner ads not appear on the initial start screen, instead appearing in later menus.

Displaying these ads during game play is highly discouraged. In doing so, they may be subject to unintentional taps/clicks, as well as they may distract from the actual game, reducing engagement and potentially retention.

When displaying these ads on game menus, it is important to ensure they do not obstruct or conflict with other buttons. Additionally, adequate padding should be provided between buttons and ads to avoid unintentional taps/clicks. Games which violate this guideline may be subject to having their ad access rejected.

##### Interstitials  

Interstitial advertisements can be very powerful. These ads overlay the entire display, completely taking over the player's attention. All UI for these ads are provided in the SDK, so no further work is required.

These types of ads work best when displayed at the end/in-between levels or plays. They should appear before the "game over" options (such as buttons to proceed to the next level) to avoid unintentional taps/clicks.

Interstitials should _never_ be displayed mid-game play. Doing so nearly guarantees players will be turned away.

There should not be a repeated number of interstitial ads shown in a short amount of time. Time between ads should be no shorter than 60 seconds, however it's highly advisable to extend that time further to reduce the chance of overloading players.
