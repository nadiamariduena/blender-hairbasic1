# 🦄

# BASIC HAIR SET UP with Blender/threejs

- I want to add some hairy/fury model to my threejs scene, I have seen advanced tutorials about how to make it in threejs without Blender, but I think I still need to learn a lot before diving into such code, so I will try my best to make it.

[Fuzzy Meshes | MEDIUM](https://medium.com/@Zadvorsky/fuzzy-meshes-4c7fd3910d6f)

[<img src="./src/img/hairy_medium.gif"/>](https://medium.com/@Zadvorsky/fuzzy-meshes-4c7fd3910d6f)

<br>

## CREATE A SPHERE AND ADD SOME HAIR TO IT

[<img src="./src/img/hair-rendered_nolights.jpg"/>]()

##### The Hair isn't the complicated part but the conversion and then the export to the threejs scene, we will see that later, first lets create the sphere and then add some hair.

[<img src="./src/img/hair-creation1.gif"/>]()

[<img src="./src/img/hair-creation2.gif"/>]()

- Comb it a little bit

[<img src="./src/img/hair-creation3.gif"/>]()
[<img src="./src/img/hair-creation4.gif"/>]()

<br>

##### Give it a little SUN light (the exported lights from Blender can conflict with the ones in threejs )

- Its the first time I create a Sun light in Blender so it wasnt that bad, even if by logic you dont position the sun in the back of the object lol but I had the 2 lights on the top so I could get a nice effect :)

[<img src="./src/img/hair-creation5:sunlight.gif"/>]()

<br>

### RESULT Lights

[<img src="./src/img/hair3.jpg"/>]()

<br>
<br>
<br>

### EXPORT

### Last time I tried i couldn't make it, maybe there's something I am missing? i will try again ...

###### This are the steps to follow to convert it, since I am new in Blender its not that simple:

[<img src="./src/img/picard.gif"/>]()

[Convert Cycles Hair Particle System to Mesh Object ](https://blender.stackexchange.com/questions/2745/convert-cycles-hair-particle-system-to-mesh-object/5255#5255)

- select object that has hair
- select convert Particle Modifier on modifiers tab
- remove particle system under particles tab
- select converted hair mesh
- add screw Modifier with .1 degrees for angle and 2 steps
  > if vertex count is too high, Add Decimate Modifier with planar apply all modifiers

```javascript

```

### To be Continued
