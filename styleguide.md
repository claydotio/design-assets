# Clay.io Design Style Guide

### Colors
Name          | Code       | HEX    | RGB           | Sample
--------------|------------|--------|---------------|------------------------
Primary Orange| $orange    | fcaa2f | 252, 170, 47  | <div style='background: #fcaa2f; width:100px; height: 100%; display: inline-block;'></div>
Primary Blue  | $blue      | 67afe6 | 103, 175, 230 | <div style='background: #67afe6; width:100px; height: 100%; display: inline-block;'></div>
Background    | $bgColor   | f2f2f2 | 242, 242, 242 | <div style='background: #f2f2f2; width:100px; height: 100%; display: inline-block;'></div>
White         | $white     | ffffff | 255, 255, 255 | <div style='background: #ffffff; width:100px; height: 100%; display: inline-block;'></div>
Black         | $black     | 000000 | 255, 255, 255 | <div style='background: #000000; width:100px; height: 100%; display: inline-block;'></div>
Dark gray     | $grayDark  | 262626 | 38, 38, 38    | <div style='background: #262626; width:100px; height: 100%; display: inline-block;'></div>
Light gray    | $grayLight | 757575 | 117, 117, 117 | <div style='background: #757575; width:100px; height: 100%; display: inline-block;'></div>

See design mock-ups for the appropriate color labels for each element.

### Logo
*Previews coming soon*  

  /images/clay_logo

- logo_standard
- logo_cloud
- logo_alt (aka stacked)

### Badges
Can be used by developers on their own promo material to link to their games on Clay.  

  /images/clay_badges

- badge_gray
- badge_gray_alt
- badge_gray_mini
- badge_orange
- badge_orange_alt
- badge_orange_mini

### Breakpoints
Standard horizontal breakpoints to be used for the media queries.
- 320px
- 360px
- 480px
- 600px  

### Fonts

##### Logo font

FF Enzo

##### Site Font

Roboto

Base scaling 1em: 12pt

##### Styles & Sizes
- Button
  - 1.33em
  - Bold
  - Primary orange, dark gray, or white (depending on state)  
- Label
  - 1em
  - Bold
  - Dark gray


##### Icon Fonts

Stars
- 1.5em
  - icon-star
    - 0xe800
    - Primary orange (highlighted), light gray
  - icon-star-half-fill
    - 0xe801
    - Primary orange

### Element Styling

- Options bar drop shadow CSS  

  ```
  -webkit-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow:    0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  box-shadow:         0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  ```
