---
title: Construction Default Object
description: Information about Construction Default Object
date: 2209.13
tags:
- CDO
- Unreal
---


Did you know in unreal engine you can call functions on objects without an instance of it?  Similar to static functions. Unreal Engine creates something called ConstructionDefaultObject or CDO. It basically creates this once for every class then duplicates this for each instance created.  To access the CDO, and call functions on it, perhaps if you wanted to fetch some default values. This also works on blueprint native or inherited objects too. 

# Some header

```cpp
UCLASS(BlueprintType)
class USomeClass : public UObject {
    GENERATED_BODY()
public:
    UFUNCTION()
    int GetPowerLevel();
}
```
Else where
```cpp
// if it's settable perhaps because you want to spawn it or use default values from blueprint
int powerLevel = SomeClassToSpawn->GetDefaultObject()->GetPowerLevel();
// Alternatively if you know the class by C++ name directly.
int powerLevel2 = USomeClass::StaticClass()->GetDefaultObject()->GetPowerLevel();
```



# Some Other header


references and extra Information:
    ![CDO--2022-09-13-22-57.png](attachments/CDO--2022-09-13-22-57.png)
    https://docs.unrealengine.com/5.0/en-US/unreal-engine-actor-lifecycle/




## Unreal Shaders
Dithered radial blur from @JustHannahGrace
https://www.reddit.com/r/unrealshaders/comments/pakp4v/dithered_radial_blur_from_justhannahgrace/
![note-2022-09-08--2022-09-08-22-37-02.png](attachments/note-2022-09-08--2022-09-08-22-37-02.png))

```cpp
static const int SceneTextureId = 14;
float2 TexelSize = View.ViewSizeAndInvSize.zw;
float2 UV = GetDefaultSceneTextureUV(Parameters,SceneTextureId);
float3 PixelSum = float3(0,0,0);
float WeightSum = 0;
for (int x = -Radius;x <= Radius; x++) {
    for (int y = -Radius;y <= Radius; y++) {
        float2 Offset = UV + ((float2(x-1,y-1) + Dither) * Multiplier) * TexelSize;
        float3 PixelColor = SceneTextureLookup(Offset, SceneTextureId, 0).rgb;
        float Weight = exp(-0.5 * pow(3.141 * (x / Radius), 2)) * exp(-0.5 * pow(3.141 * (y / Radius), 2));
        PixelSum += PixelColor * Weight;
        WeightSum += Weight;
    }
}
return PixelSum / WeightSum;
```


## Studio Ghibli Art Style

Lighting Boy Studio Ghibli Tree for Blender
Original tutorial here: https://www.youtube.com/watch?v=DEgzuMmJtu8

[Lightning Boy Studio youtube channel](https://www.youtube.com/c/LightningBoyStudio/videos)
![note-2022-09-08--2022-09-08-22-54-31.png](attachments/note-2022-09-08--2022-09-08-22-54-31.png))

but they also made a full for sale tool too? 
https://lightningboystudio.gumroad.com/l/RZcQI
https://lightningboystudio.gumroad.com/l/FHjJ

![note-2022-09-08--2022-09-08-22-51-25.png](attachments/note-2022-09-08--2022-09-08-22-51-25.png))

### Other relevant noteworthy mentions

https://docs.unrealengine.com/4.27/en-US/RenderingAndGraphics/Materials/HowTo/Fresnel/
![note-2022-09-08--2022-09-08-22-52-38.png](attachments/note-2022-09-08--2022-09-08-22-52-38.png))


## (Tutorial) Simi CelShade PostProcess Material work with light color, point lights and skybox
https://forums.unrealengine.com/t/tutorial-simi-celshade-postprocess-material-work-with-light-color-point-lights-and-skybox/89332



