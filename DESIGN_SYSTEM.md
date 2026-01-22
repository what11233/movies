# Visual Design Guide 🎨

## Netflix-Inspired Movie Hub Design System

### Color Palette

```
Primary Red:      #e50914 (Netflix red - brand color)
Dark Background:  #141414 (Deep black - main background)
Card Background:  #232323 (Darker gray - card/element background)
Text Primary:     #ffffff (Pure white - main text)
Text Secondary:   #b3b3b3 (Light gray - secondary text)
Accent Gold:      #ffdd57 (Gold - ratings and highlights)
```

### Typography

- **Font Family**: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif
- **Header**: Bold, uppercase, 2rem
- **Section Titles**: 2rem with left red border
- **Movie Titles**: 1.1rem
- **Metadata**: 0.8rem
- **Badges**: 0.8rem, bold

### Spacing & Layout

- **Header Padding**: 1.5rem 5% (responsive)
- **Main Padding**: 2rem 5%
- **Gap**: 25px (cards), 15px (filters)
- **Border Radius**: 12px (cards), 10px (sections), 4px (buttons)
- **Max Width**: 1400px (content)

### Component Styles

#### Header
```
- Background: Gradient overlay with backdrop blur
- Sticky: top 0, z-index 1000
- Height: ~60px
- Elements: Logo (red), Nav (white), Search (input)
```

#### Hero Section
```
- Height: 50vh (responsive)
- Background: Image with dark gradient overlay
- Text: White title + dim description
- Parallax: Fixed background attachment
```

#### Movie Cards
```
- Dimensions: 240px width × auto height
- Image: 360px height × 100% width
- Transition: Scale 1.05 on hover
- Shadow: 0 4px 8px (normal), 0 10px 30px (hover)
- Border Radius: 12px
- Badges: Top-right, absolute position
```

#### Filter Bar
```
- Grid: 2fr 1fr 1fr (desktop), 1fr (mobile)
- Background: Semi-transparent card bg with blur
- Border: 1px solid red (20% opacity)
- Inputs: Dark background, red border on focus
- Rounded: 20px (search), 5px (selects)
```

#### Buttons
```
- Primary: Red background, white text
- Secondary: Red border, red text, transparent background
- Hover: Scale 1.02, darker red
- Padding: 8-12px horizontal, 10-12px vertical
- Border Radius: 4px
```

### Animation & Transitions

- **Card Hover**: `0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)`
- **Scale**: 1.05 (cards), 1.02 (buttons)
- **Color**: 0.3s ease
- **All**: 0.3-0.4s ease/cubic-bezier

### Responsive Design

#### Desktop (1200px+)
```
- Header: Flex row, logo | nav | search
- Grid: repeat(auto-fill, minmax(240px, 1fr))
- Card Image: 360px height
- Columns: Full layout
```

#### Tablet (768px - 1199px)
```
- Header: Stack vertically, center aligned
- Grid: repeat(auto-fill, minmax(180px, 1fr))
- Card Image: 270px height
- Columns: 2-3 wide
```

#### Mobile (480px - 767px)
```
- Header: Stack vertically, centered
- Search: Full width
- Grid: repeat(auto-fill, minmax(140px, 1fr))
- Card Image: 210px height
- Columns: 2 wide
```

#### Small Mobile (<480px)
```
- Logo: 1.2rem
- Search: Max-width 250px
- Grid: Optimized for small screens
- Card Image: 210px height
- Padding: Reduced to 3%
```

### Interactive States

**Hover States:**
- Cards: Scale up, shadow increase, z-index boost
- Links: Color change to red
- Buttons: Background darker, scale up
- Search: Border red, background darker

**Focus States:**
- Search Input: Red border, shadow glow
- Selects: Red border, darker background

**Active States:**
- Pagination: Red active, disabled opacity 0.5
- Buttons: Darker red background

### Shadows & Depth

- **Cards (default)**: `0 4px 8px rgba(0, 0, 0, 0.4)`
- **Cards (hover)**: `0 10px 30px rgba(0, 0, 0, 0.8)`
- **Text Shadow**: `1-2px rgba(0, 0, 0, 0.8)`
- **Glow (focus)**: `0 0 10px rgba(229, 9, 20, 0.3)`

### Z-Index Scale

```
Header:     1000
Modal:      900-999
Card Hover: 2
Default:    1
```

### Accessibility

- **Contrast Ratio**: WCAG AA compliant (white on dark)
- **Focus Visible**: Clear red border and shadow
- **Alt Text**: All images have descriptive alt text
- **Font Size**: Minimum 12px for readability
- **Hover/Focus**: All interactive elements have visible states

### Loading & Error States

- **Loading**: Text "Loading..." centered, gray color
- **Error**: Red text (#e50914), centered with message
- **Empty**: Gray text explaining no results

### Grid Specifications

**Movie Grid:**
- Desktop: 6 columns (240px)
- Tablet: 4 columns (180px)
- Mobile: 2 columns (140px)
- Gap: 25px (desktop), 15px (tablet), 10px (mobile)

**Filter Grid:**
- Desktop: 2fr 1fr 1fr (search | type | genre)
- Mobile: 1fr (stack vertically)

### Implementation Checklist

- [x] Color variables defined
- [x] Typography system implemented
- [x] Spacing scale established
- [x] Component styles created
- [x] Animations added
- [x] Responsive breakpoints set
- [x] Accessibility considerations included
- [x] Hover/focus states defined
- [x] Shadow system in place
- [x] Z-index scale documented

### Browser Support

- Chrome: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Edge: Latest 2 versions
- Mobile: iOS Safari, Chrome Mobile

### Performance Considerations

- Smooth animations use GPU acceleration
- Backdrop blur applied judiciously
- Images use efficient formats
- CSS is optimized and minified
- Transitions use efficient properties

### Future Enhancements

- Dark mode toggle
- Custom theme colors
- Advanced animations
- Micro-interactions
- Loading skeletons
- Infinite scroll
- Accessibility improvements
