/*
--------------------------------------------------------------------------------
Tailwind CSS Tutorial #1 - Intro & Setup
--------------------------------------------------------------------------------
VSCode extensions = tailwindcss intelisense



If you are unsure go to How to Install Tailwind CSS v3 For Beginners by Devtamin

To Create package.json file, run this CLI
npm init -y

This tracks the dependencies of tailwind

To install the tailwind dependencies:
npm install -D tailwindcss

To create the FULL tailwind config file;
npx tailwindcss init --full

Remember to add the short link in config file in the content section of the file

The short link is in the documentation


Tailwind has two folders: src and dist
src is used for writing codes and dist
is used for executing the code.

we put our index.html inside the src file

In the src folder:
create a an input.css code

and put these snippets in your input.css file
@tailwind base;
@tailwind components;
@tailwind utilities;


Then run this command in CLI:
-> You need to run this command to run tailwind all the time
-> This command also save your tailwind codes permanently
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

In your index.html(in src):
Notice <link href="/dist/output.css" rel="stylesheet"> in head. 
The href must target the output.css file

To run it, use your usual live server extension on VSCode!

--------------------------------------------------------------------------------
Tailwind CSS Tutorial #3 - Fonts and Colours
--------------------------------------------------------------------------------
The colour strength ranges from 0 to 900

You can change their fonts' colours, fonts' weights and fonts' sizes

Font weight is the overall thickness 
of a typeface's stroke in any given font.

--------------------------------------------------------------------------------
Tailwind CSS Tutorial #4 - Margin, Padding & Borders
--------------------------------------------------------------------------------

p stands for padding and the number besides it stands for the strength of padding.

p-0 
p-1

p-1 = padding with the strength of 1 in all direction

py is the padding in y direction 
px is the padding in x direction

pt = padding top
pr = padding right
pl = padding left
pb = padding bottom

mt = margin top
mr = margin right 
ml = margin left
mb = margin bottom

border-3 = border everything in x and y direction with the strength of 3.
border-b = border bottom
border-gray-200 = gray border with strength of 200

--------------------------------------------------------------------------------
Tailwind CSS Tutorial #5 - Tailwind Config
--------------------------------------------------------------------------------
More about the Tailwind config file

To update the tailwind config file:
Older versions: npm run build-css
3.00 versions or above: no commands needed

How to extend your config file?
Extend meaning adding your own custum tailwind properties
add this in your theme object
extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
    }

--------------------------------------------------------------------------------
Tailwind CSS Tutorial #6 - Custom Fonts
--------------------------------------------------------------------------------
By default tailwind comes in with a lot of standard fonts like sans fontfamily

How to add google fonts into your tailwind project?
1) Select fonts, select all especilly the bold italic bla bla bla
2) paste the import link into the input.css
3) copy this snippet into the font family part of extend properties
fontFamily: {
        Nunito: ['Nunito']
      }

--------------------------------------------------------------------------------
Tailwind CSS Tutorial #7 - Using Flexbox
--------------------------------------------------------------------------------
<div class="flex ">
    <a href="#" class="text-primary">Log in</a>
    <a href="#" class="text-primary">Sign up</a>
</div>

Put the key word flex in the parent container to activate flex!
justify is for shifting in the x direction 

"item" is used to align/arrange flex-items in the x-axis

--------------------------------------------------------------------------------
Tailwind CSS Tutorial #8 - Responsive Design
--------------------------------------------------------------------------------
screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }

By default, we always start from mobile phone (0px to infinity px)

sm meaning from 640px to 768px
sm:text-red-400

--------------------------------------------------------------------------------
Tailwind CSS Tutorial #9 - Cards
--------------------------------------------------------------------------------
Overflow meaning anything that goes over the boundaries of the card 
itself including at its corner are hidden.

Block causes the element being applied being pushes downward

To expand the image to full width:
w-full

Top zoom in the image without changing the shape:
object-cover

--------------------------------------------------------------------------------
Tailwind CSS Tutorial #10 - Badges
--------------------------------------------------------------------------------
No notes

--------------------------------------------------------------------------------
Tailwind CSS Tutorial #11 - @apply Directive
--------------------------------------------------------------------------------
Grouping classes to prevent repeated codes

In input.css:
add this

.yourClassName{
  @apply yourClassProperties 
}

<div class="yourClassName"></div>

--------------------------------------------------------------------------------
Tailwind CSS Tutorial #12 - Grids
--------------------------------------------------------------------------------
How to activate grid. Add the grid class in the grid parent container

To specific number of columns:
grid-cols-numberOfColumns

To create grid gaps:
gap-strengthOfGap

To create ratios for the child elements:
col-span-amountOfRatio

--------------------------------------------------------------------------------
Tailwind CSS Tutorial #13 - Buttons
--------------------------------------------------------------------------------
.btn{
    @apply rounded-full py-2 px-3 uppercase text-xs font-bold tracking-wider cursor-pointer;;
}


--------------------------------------------------------------------------------
Tailwind CSS Tutorial #14 - Icons
--------------------------------------------------------------------------------
heroicons for external icons. TailwindCSS do not supply us with icons :(


--------------------------------------------------------------------------------
ilwind CSS Tutorial #15 - Hover Effects
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
Tailwind CSS Tutorial #16 - Responsive Nav (part 1)
--------------------------------------------------------------------------------


--------------------------------------------------------------------------------
Tailwind CSS Tutorial #18 - Transitions
--------------------------------------------------------------------------------
class="transition"















*/