# Clay.io Design Style Guide

## Contents  

### 1. Branding
  1. Colors
  2. Logo
  3. Badges

### 2. Site Styling
  1. Fonts
  2. Element styling
  3. Breakpoints

---

## Branding

### 1.1 Colors
_Branding colors_  

Color                                                                         | Name              | Code       | HEX    | RGB
------------------------------------------------------------------------------|-------------------|------------|--------|--------------
![Alt text](/style_guide_reference/branding/colors/primary_orange.png)  | Primary Orange    | $orange    | fcaa2f | 252, 170, 47
![Alt text](/style_guide_reference/branding/colors/primary_blue.png)    | Primary Blue      | $blue      | 67afe6 | 103, 175, 230  

_Text colors_  

Name              | Code       | HEX    | RGB
------------------|------------|--------|--------------
Dark gray         | $grayDark  | 262626 | 38, 38, 38
Light gray        | $grayLight | 757575 | 117, 117, 117

_Element styling_  

Name              | Code       | HEX    | RGB
------------------|------------|--------|--------------
Background        | $bgColor   | f2f2f2 | 242, 242, 242
White             | $white     | ffffff | 255, 255, 255
Near white        | $          | f7f7f7 | 247, 247, 247
Disabled gray     | $          | cccccc | 204, 204, 204
Divider           | $divider   | dedede | 222, 222, 222  

### 1.2 Logo
Logos are primarily in .svg and .png formats.  

Image             | Name
------------------|--------------
image             | logo_standard
image             | logo_cloud
image             | logo_alt  

### 1.3 Badges
Can be used by on promotional material or to link to games  

Image             | Name
------------------|--------------
image             | gray
image             | gray_alt
image             | gray_mini
image             | orange
image             | orange_alt
image             | orange_mini  

---

## Site Styling

### 2.1 Fonts

#### Branding Font

To be used exclusively on logo and promo image material.
- FF Enzo

#### Site Font

To be used globally across the Clay.io site and apps
- Roboto

###### Font Sizing

Base scaling: 1rem = 10pt  

Size      | Name
----------|--------
1.2rem    | Small
1.6rem    | Medium
2.4rem    | Large
3.6rem    | X-Large
4.2rem    | Huge  

#### Icon Font

Icon      | Name                  | Unicode
----------|-----------------------|--------
icon      | icon-star             | 0xe800
icon      | icon-star-half-fill   | 0xe801
icon      | icon-share            | 0xe802
icon      | icon-market           | 0xe803
icon      | icon-back-arrow       | 0xe804
icon      | icon-close            | 0xe805
icon      | icon-chevron-left     | 0xe806
icon      | icon-chevron-right    | 0xe807  

### 2.2 Element Styling

###### Buttons
  _Standard button_  
- Corner radii: 20px  
- Height: 40px
- Standard button shadow

  ```
  box-shadow: 1px 1.732px 10px 0px rgba(0, 0, 0, 0.3);
  ```


  _Close button_
- Close button shadow

  ```
  opacity: 0.75;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.75);
  ```


###### Modals

- Modal corner radii: 3px  
- Dark overlay: 70% black  
- Modal shadow

  ```
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  ```
