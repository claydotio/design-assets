# Clay.io Design Style Guide

### Colors

Name          | Code       | HEX    | RGB
--------------|------------|--------|--------------
Primary Orange| $orange    | fcaa2f | 252, 170, 47
Primary Blue  | $blue      | 67afe6 | 103, 175, 230
Background    | $bgColor   | f2f2f2 | 242, 242, 242
Divider       | $divider   | e6e6e6 | 230, 230, 230
Disabled      | $          | cccccc | 204, 204, 204
White         | $white     | ffffff | 255, 255, 255
Off white     | $          | f7f7f7 | 247, 247, 247
Black         | $black     | 000000 | 255, 255, 255
Dark gray     | $grayDark  | 262626 | 38, 38, 38
Light gray    | $grayLight | 757575 | 117, 117, 117

See design mock-ups for the appropriate color labels for each element.

### Logo
Logos are in .svg format. Other formats upon request.

  /images/logos

- logo_standard
- logo_cloud
- logo_alt (aka stacked)

Developer logo to be used on developer section of the site.

- logo_dev
- logo_cloud_dev

### Badges
Can be used by developers on their promo material to link to their games on Clay.

  /images/badges

- gray
- gray_alt
- gray_mini
- orange
- orange_alt
- orange_mini

### Breakpoints
Standard horizontal breakpoints to be used for the media queries.
- 320px
- 360px
- 480px
- 600px  

### Fonts

##### Logo font

FF Enzo Bold

##### Site Font

Roboto

Base scaling 1rem: 10pt

##### Styles & Sizes

- Button
  - 1.6rem
  - Bold
  - Primary orange, dark gray, or white (depending on state)  
- Label
  - 1.2rem
  - Bold
  - Dark gray


##### Icon Fonts

Ratings
- 1.8rem
  - icon-star
    - 0xe800
    - Primary orange (highlighted), light gray
  - icon-star-half-fill
    - 0xe801
    - Primary orange

Swipe Bar
- 1.8rem
- Primary Orange
  - icon-share
    - 0xe802
  - icon-star
    - 0xe800
  - icon-market
    - 0xe803  

- 2.4rem
  - icon-chevron-left
    - 0xe806
  - icon-chevron-right
    - 0xe807  

Rate Modal
  - icon-star
    - 5.6rem
    - 0xe800
    - Primary orange (selected), Light gray (deselected)

Navigation
  - icon-back-arrowv
    - 3.2rem
    - Primary orange
    - 0xe804
  - icon-close
    - 2.4rem
    - Light gray, white (if on colored bg)
    - 0xe805  

### Element Styling

- Options bar drop shadow CSS  

  ```
box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.04)
  ```

- Close button drop shadow CSS

  ```
  opacity: 0.75;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);

  ```

- Modal drop shadow

  ```
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  ```

- Modal/buttons corner radii: 3px

- Dark overlay opacity: 70%
