# 内容设计判断题更新日志

## 2026-11-13

本次逐项复核内容设计模块全部 236 道判断题。确认修正 16 道答案，并同步重写解析；另修订 19 道解析。13 道存在教材口径、版本或题干歧义，保留当前判分并列入待核对清单。

网页题号按“内容设计 → 判断题 → 全部题目”的默认答题卡顺序统计。错题本、收藏或未答筛选会改变显示序号，因此下表同时列出原题号和稳定题目 ID。

每题的 A/B 对应文字可能不同。下表同时记录字母与“正确／错误”，以防只翻转字母造成误改。判分采用题目所指的软件与功能，UE4 条目优先核对 4.27 文档，Maya 入口按默认工具架核对。

## 答案修正

| 网页题号 | 原题号 / ID | 题干 | 原答案 | 新答案 | 修正原因与来源 |
| --- | --- | --- | --- | --- | --- |
| 37 | 63 / design-63 | Skybox Textures都能用来代替实际的几何体物件并有效的提高性能 | B（错误） | A（正确） | 原解析自行增加“替代所有物件”的全称条件；UE4.27官方性能指南明确列出skybox textures可以高效模拟细节几何。 [来源1](https://dev.epicgames.com/documentation/unreal-engine/performance-guidelines-for-artists-and-designers?application_version=4.27) |
| 51 | 84 / design-84 | Maya软件多边形球体的轴向细分数可以设置多边形球体高度上的细分段数 | B（正确） | A（错误） | 官方polySphere分别定义绕轴与沿高度两个参数，原答案B与原解析自身也矛盾。 [来源1](https://help.autodesk.com/cloudhelp/2025/CHS/Maya-Tech-Docs/CommandsPython/polySphere.html) |
| 74 | 124 / design-124 | 移动激光扫描系统主要由激光扫描仪和惯性导航系统组成 | A（错误） | B（正确） | 官方RIEGL移动测图产品的核心组成是激光传感器与IMU/GNSS单元；原解析错误地批驳了题干并未提及的相机。 [来源1](https://www.riegl.com/en-australia/products/detail/riegl-vmx-3ha)、[来源2](https://www.riegl.com/en-australia/products/segment/mobile-laser-scanning) |
| 89 | 151 / design-151 | "标准曲面材质"命令参数"透射"卷展栏中的色散系数是指定材质的色散系数，用于描述折射率随波长变化的程度，值越大，色散越多 | A（正确） | B（错误） | 题干混淆阿贝数与色散强度，当前答案及解析反向。 [来源1](https://help.autodesk.com/cloudhelp/ENU/AR-Core/files/ac-shading/ac-surface-shaders/ac-standard-surface/arnold_user_guide_ac_standard_surface_ac_transmission_html.html) |
| 94 | 161 / design-161 | 点云文件中的三维坐标指的是本地坐标系中的坐标 | B（正确） | A（错误） | LAS明确支持空间参考、地理坐标及重投影，原题的一概断言不成立。 [来源1](https://pro.arcgis.com/en/pro-app/3.5/help/analysis/3d-analyst/understand-las-coordinate-system.htm) |
| 122 | 206 / design-206 | PS软件Lab模式中的a通道是色相，包括的颜色值从深绿到灰,再到亮粉红色 | B（正确） | A（错误） | 当前解析已经承认a为色度轴、不是色相通道，答案却仍判正确。 [来源1](https://helpx.adobe.com/photoshop/desktop/adjust-color/choose-colors/color-modes-in-photoshop.html)、[来源2](https://helpx.adobe.com/photoshop/desktop/adjust-color/choose-colors/choose-colors-with-the-adobe-color-picker.html) |
| 124 | 209 / design-209 | PS软件HSB模式只有在颜色吸取窗口中才会出现。H代表色相,S代表饱和度,B代表亮度 | A（正确） | B（错误） | Adobe颜色面板文档明确列出HSB Sliders，推翻“只有拾色器”的限定。 [来源1](https://helpx.adobe.com/photoshop/desktop/adjust-color/choose-colors/choose-colors-in-the-color-panel.html)、[来源2](https://helpx.adobe.com/photoshop/desktop/adjust-color/choose-colors/choose-colors-with-the-adobe-color-picker.html) |
| 125 | 210 / design-210 | PS软件"矩形选框"工具消除锯齿是用于清除选区边缘的锯齿 | B（正确） | A（错误） | 原解析只解释通用消除锯齿作用，忽略题干指定的矩形选框工具。 [来源1](https://helpx.adobe.com/photoshop/using/selecting-marquee-tools.html) |
| 149 | 257 / design-257 | Skybox Textures都能用来代替实际的几何体物件并有效的提高性能 | A（错误） | B（正确） | 官方性能指南直接支持该用途；原解析把题干擅自扩大成“替代所有几何体”，且写错A/B映射。 [来源1](https://dev.epicgames.com/documentation/unreal-engine/performance-guidelines-for-artists-and-designers?application_version=4.27) |
| 162 | 283 / design-283 | UE4按下"T"键可以切换到Scale Tool(缩放工具)进行缩放操作 | B（正确） | A（错误） | 原答案和解析把缩放快捷键误写为 T，应为 R。 [来源1](https://dev.epicgames.com/documentation/en-us/unreal-engine/viewport-controls?application_version=4.27) |
| 178 | 303 / design-303 | 三维重建是将三维的物体在虚拟世界中重建出来 | B（错误） | A（正确） | 原解析把从现实对象恢复数字三维模型这一正常重建目标误判为过程颠倒。 [来源1](https://www.autodesk.com/solutions/reality-capture)、[来源2](https://www.realityscan.com/?lang=en-US) |
| 194 | 334 / design-334 | UE4可以使用"E"键切换到Translation Tool(平移工具)进行移动操作 | B（正确） | A（错误） | 原解析已经写明 E 旋转、W 平移，却仍把题干判为正确，答案解析自相矛盾。 [来源1](https://dev.epicgames.com/documentation/en-us/unreal-engine/viewport-controls?application_version=4.27) |
| 203 | 346 / design-346 | 选择场景中的所有模型，单击"多边形建模"工具架上的"结合"图标，即可将多个模型组合为一个整体 | A（错误） | B（正确） | 原解析把“组合为一个整体”额外理解成“焊接为连续实体”，与 Maya Combine 的官方定义不符。 [来源1](https://help.autodesk.com/cloudhelp/2022/ENU/Maya-Modeling/files/GUID-797DD7AE-11D4-4399-8B31-BA0B67D33650.htm) |
| 212 | 361 / design-361 | Maya软件在"多边形建模"工具架上右击"柏拉图多面体"图标可以创建多边形管道 | B（错误） | A（正确） | 本机 Autodesk Maya 2020 官方默认工具架脚本中，柏拉图按钮明确配置了 CreatePolygonPipe 菜单项，原答案否认此入口。 [来源1](https://help.autodesk.com/cloudhelp/2024/ENU/Maya-Tech-Docs/CommandsPython/shelfButton.html)、[来源2](https://help.autodesk.com/cloudhelp/2026/ENU/Maya-Tech-Docs/CommandsPython/polyPipe.html) |
| 224 | 383 / design-383 | 移动测绘系统MMS包括移动激光扫描系统和惯性导航系统组成 | A（错误） | B（正确） | 原解析擅自把“包括”改读成“只由两项组成”；Trimble 标准移动测绘配置包含激光扫描器与 GNSS/IMU。 [来源1](https://help.fieldsystems.trimble.com/tbc/22503.htm)、[来源2](https://www.riegl.com/en-uk/products/segment/mobile-laser-scanning) |
| 230 | 391 / design-391 | 材质的通用属性"镜面反射着色"偏心率是指该参数用来控制高光扩散的大小，数值越大，高光点就越小。 | A（正确） | B（错误） | Autodesk blinn 节点文档明确较大偏心率对应较大高光，原答案与解析均把方向写反。 [来源1](https://help.autodesk.com/cloudhelp/2024/ENU/Maya-Tech-Docs/Nodes/blinn.html) |

## 解析修正

| 网页题号 | 原题号 / ID | 当前答案 | 修改内容与来源 |
| --- | --- | --- | --- |
| 13 | 22 / design-22 | A（错误） | 未找到适用于所有扫描仪的80%完整率、40%站间重叠判定标准，原解析“规范90%、20–30%”仅用同题库互证，来源不足。 本题判分仍待原教材确认。 [来源1](https://knowledge.faro.com/Software/FARO_Connect/Connect/FARO_Connect_Overview) |
| 36 | 62 / design-62 | A（错误） | 原解析暗示EP曲线不能编辑CV、不由CV表示，概念不严谨。 [来源1](https://help.autodesk.com/cloudhelp/2024/ENU/Maya-Modeling/files/GUID-2B521AD9-1CB2-43C9-8385-388D118A5AF3.htm)、[来源2](https://help.autodesk.com/cloudhelp/2023/ENU/Maya-Animation/files/GUID-BE314708-E05D-41F5-A5FB-BFAB5CB0EFB0.htm) |
| 47 | 77 / design-77 | A（正确） | 保留官方基础资源定义的判分，修正原解析将其推广成“不能逐帧改变顶点”的绝对限制。 [来源1](https://dev.epicgames.com/documentation/en-us/unreal-engine/python-api/class/StaticMesh?application_version=4.27)、[来源2](https://dev.epicgames.com/documentation/en-us/unreal-engine/vertex-animation-tool?application_version=4.27) |
| 59 | 97 / design-97 | B（正确） | Specular Roll Off在Blinn中描述斜视角反射能力，在Ramp Shader中是高光强度渐变。官方文档未支持原解析中“数值越小，衰减越弱、高光越强”的通用反比断言，题干又未指明着色器。 本题判分仍待原教材确认。 [来源1](https://help.autodesk.com/cloudhelp/2025/CHS/Maya-LightingShading/files/GUID-13C10DF8-5CB4-49D2-9456-DCC1B7F1653C.htm)、[来源2](https://help.autodesk.com/cloudhelp/2022/CHS/Maya-LightingShading/files/GUID-022F69B8-B1A3-46A3-9917-0D9CBDBB6733.htm) |
| 69 | 117 / design-117 | A（错误） | 答案错误保持，但原解析“HSB最大亮度接近白”过度简化，不能忽略饱和度。 [来源1](https://helpx.adobe.com/photoshop-elements/desktop/working-with-colors/color.html)、[来源2](https://helpx.adobe.com/id_en/photoshop/desktop/adjust-color/choose-colors/choose-colors-with-the-adobe-color-picker.html) |
| 70 | 118 / design-118 | A（错误） | 原解析杜撰统一必须_LOD编号命名限制，真实文档是导入输出命名规则；原题“导入网格体命名”对象含糊。 [来源1](https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-import-static-mesh-lods?application_version=4.27)、[来源2](https://dev.epicgames.com/documentation/unreal-engine/fbx-import-options-reference-in-unreal-engine) |
| 73 | 122 / design-122 | A（正确） | 原解析完整套用了前导比例题的说明，与实际题干不对应。 [来源1](https://help.autodesk.com/cloudhelp/2022/CHS/Maya-Modeling/files/GUID-92112B70-161B-4D89-A1E5-BC3D58274EFB.htm) |
| 96 | 164 / design-164 | A（正确） | 布站覆盖率与重叠率应随设备、场景、标靶或云配准流程而定，未找到支持90%与20%至30%作为普遍强制规则的官方条款。 本题判分仍待原教材确认。 [来源1](https://knowledge.faro.com/Hardware/Focus/Focus/Laser_Scanner_Best_Practices) |
| 130 | 220 / design-220 | B（正确） | 答案正确，仅将原解析误写的“管道”更正为圆柱体，并明确沿高度方向。 [来源1](https://help.autodesk.com/cloudhelp/2022/ENU/Maya-Basics/files/GUID-45D2EAD4-5BCF-42DA-A1AB-EC6EE09FE705.htm) |
| 145 | 252 / design-252 | B（正确） | 答案正确，但原解析“一条或多条截面曲线沿路径”混入挤出概念。 [来源1](https://help.autodesk.com/cloudhelp/2020/ENU/Maya-Tech-Docs/Nodes/loft.html) |
| 146 | 253 / design-253 | B（正确） | Adobe把显示器分辨率定义为像素尺寸，物理尺寸影响像素密度或图像显示大小。传统教材有时用每单位长度像素数来称屏幕分辨率，题干未区分。 本题判分仍待原教材确认。 [来源1](https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/resize-adjust-resolution/monitor-resolution-and-image-display-size.html) |
| 199 | 342 / design-342 | B（正确） | 答案保持正确，原解析“在其上增加编辑点/参数点”未说明末端延伸的真实作用。 [来源1](https://help.autodesk.com/cloudhelp/2027/ENU/Maya-Modeling/files/GUID-08E73E34-DEAE-4E5B-98DA-CFB4560C06E8.htm) |
| 204 | 347 / design-347 | A（正确） | 保留通用题干判分，补充标准 UE4 FBX 流程与导入设置的适用边界。 [来源1](https://dev.epicgames.com/documentation/en-us/unreal-engine/fbx-static-mesh-pipeline?application_version=4.27)、[来源2](https://dev.epicgames.com/documentation/en-us/unreal-engine/fbx-import-options-reference?application_version=4.27) |
| 214 | 364 / design-364 | A（正确） | 保持正确答案，修正原解析将端面细分误说成环向边数。 [来源1](https://help.autodesk.com/cloudhelp/2026/ENU/Maya-Tech-Docs/CommandsPython/polyPipe.html) |
| 217 | 368 / design-368 | B（错误） | 保留一般性题干答案，补充 UE4 FBX 默认流程的原点约定，避免把它与通用导出混为一谈。 [来源1](https://dev.epicgames.com/documentation/en-us/unreal-engine/fbx-static-mesh-pipeline?application_version=4.27)、[来源2](https://dev.epicgames.com/documentation/en-us/unreal-engine/fbx-import-options-reference?application_version=4.27) |
| 219 | 371 / design-371 | B（正确） | 屏幕分辨率在旧版 Photoshop 教材中常按每英寸像素数描述，当前通用显示设置又常指横纵像素总数，术语版本不同。 本题判分仍待原教材确认。 [来源1](https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/resize-adjust-resolution/image-size-resolution-and-resampling.html)、[来源2](https://help.adobe.com/archive/it/photoshop/cs6/photoshop_reference.pdf) |
| 225 | 386 / design-386 | A（正确） | 保持正确答案，修正原解析把端面细分说成圆周环向分段。 [来源1](https://help.autodesk.com/cloudhelp/2026/ENU/Maya-Tech-Docs/CommandsPython/polyCylinder.html)、[来源2](https://help.autodesk.com/cloudhelp/2022/ENU/Maya-Basics/files/GUID-45D2EAD4-5BCF-42DA-A1AB-EC6EE09FE705.htm) |
| 227 | 388 / design-388 | A（错误） | 原答案正确，但解析套用了其他软件的 Ctrl+A 全选习惯，需改为 Maya 的实际快捷键。 [来源1](https://help.autodesk.com/cloudhelp/2024/ENU/Maya-Basics/files/GUID-67A58D31-4722-4769-B3E6-1A35B5B53BED.htm) |
| 235 | 406 / design-406 | B（正确） | 保持正确答案，原解析笼统引入次表面效果，未说明这是单层透明表面的光线跟踪厚度设置。 [来源1](https://help.autodesk.com/cloudhelp/2022/ENU/Maya-LightingShading/files/GUID-426A7F26-4647-4DC4-B390-6380620AD757.htm) |

## 修订后的完整解析

### 网页第 13 题 · 原题 22 · design-22

扫描仪测站设置原则是在可视范围内,保证80%以上数据的完整性,站站之间重复率40%左右

参考答案 A（错误）。

本题暂保留原参考答案 A（错误），具体参数待核对原教材。测站完整率和重叠率取决于设备、场景及配准方法；目前缺少支持本题“80%完整率、40%重叠率”组合判定的明确规范，不能仅依据同题库另一组数字判错。

[来源1](https://knowledge.faro.com/Software/FARO_Connect/Connect/FARO_Connect_Overview)

### 网页第 36 题 · 原题 62 · design-62

Maya软件EP曲线在"控制顶点"层级中,可以通过更改曲线的编辑点位置来改变曲线的形状

参考答案 A（错误）。

EP 曲线工具通过指定编辑点来创建 NURBS 曲线，并据此计算控制顶点。创建后仍可分别在“编辑点”或“控制顶点”组件模式下修改形状；在“控制顶点”层级选择的是 CV，不能把它称为编辑点 EP。题干混淆了组件层级，因此错误。

[来源1](https://help.autodesk.com/cloudhelp/2024/ENU/Maya-Modeling/files/GUID-2B521AD9-1CB2-43C9-8385-388D118A5AF3.htm)、[来源2](https://help.autodesk.com/cloudhelp/2023/ENU/Maya-Animation/files/GUID-BE314708-E05D-41F5-A5FB-BFAB5CB0EFB0.htm)

### 网页第 37 题 · 原题 63 · design-63

Skybox Textures都能用来代替实际的几何体物件并有效的提高性能

参考答案 A（正确）。

Skybox 纹理可用于表现天空及远处背景，配合广告牌或替身模型等手段模拟复杂几何细节，减少需要实际绘制的几何体。题干说的是这类性能优化用途，没有声称可替代任意近景或交互物体，因此判为正确。

[来源1](https://dev.epicgames.com/documentation/unreal-engine/performance-guidelines-for-artists-and-designers?application_version=4.27)

### 网页第 47 题 · 原题 77 · design-77

UE4静态网格体缓存在视频存储器中，因此可以对它们进行平移、旋转和缩放，但不能为其顶点设置动画

参考答案 A（正确）。

按 UE4 对 Static Mesh 资源的基础定义，静态网格使用固定多边形几何，可对实例进行平移、旋转和缩放，不自带骨骼式顶点变形动画。题干按这一资源分类口径判为正确。材质 World Position Offset 和顶点动画纹理仍能使静态网格产生视觉变形，不能把此结论扩展为所有渲染技术都无法移动顶点。

[来源1](https://dev.epicgames.com/documentation/en-us/unreal-engine/python-api/class/StaticMesh?application_version=4.27)、[来源2](https://dev.epicgames.com/documentation/en-us/unreal-engine/vertex-animation-tool?application_version=4.27)

### 网页第 51 题 · 原题 84 · design-84

Maya软件多边形球体的轴向细分数可以设置多边形球体高度上的细分段数

参考答案 A（错误）。

Subdivisions Axis 控制绕球体轴线一周的细分数量；Subdivisions Height 才控制沿球体高度方向的细分。题干把轴向细分数说成高度方向的分段数，混淆了两个参数，因此错误。

[来源1](https://help.autodesk.com/cloudhelp/2025/CHS/Maya-Tech-Docs/CommandsPython/polySphere.html)

### 网页第 59 题 · 原题 97 · design-97

材质的通用属性"镜面反射着色"镜面反射衰减是指该参数用于控制高光的强度，数值越小，高光就越强。

参考答案 B（正确）。

本题暂保留原参考答案 B（正确），具体材质口径待核对。Maya 的 Specular Roll Off 在 Blinn 中与斜视角反射能力有关，在 Ramp Shader 中可通过渐变调节高光强度，不能仅凭“衰减”字面认定其与高光强度普遍成反比。

[来源1](https://help.autodesk.com/cloudhelp/2025/CHS/Maya-LightingShading/files/GUID-13C10DF8-5CB4-49D2-9456-DCC1B7F1653C.htm)、[来源2](https://help.autodesk.com/cloudhelp/2022/CHS/Maya-LightingShading/files/GUID-022F69B8-B1A3-46A3-9917-0D9CBDBB6733.htm)

### 网页第 69 题 · 原题 117 · design-117

PS软件亮度是色彩的明亮程度,最大亮度是色彩最鲜明的状态,黑色的亮度为0

参考答案 A（错误）。

HSB 的亮度 B 表示颜色的相对明暗，饱和度 S 才对应颜色的纯度或鲜艳程度。B 为 0 时是黑色；B 为 100% 时不一定是白色，例如饱和红色也可有最高亮度。题干把最大亮度等同于颜色最鲜明，整体错误。

[来源1](https://helpx.adobe.com/photoshop-elements/desktop/working-with-colors/color.html)、[来源2](https://helpx.adobe.com/id_en/photoshop/desktop/adjust-color/choose-colors/choose-colors-with-the-adobe-color-picker.html)

### 网页第 70 题 · 原题 118 · design-118

UE4导入LOD时，导入网格体的命名可以不遵循默认的命名规则

参考答案 A（错误）。

按 UE4 官方 LOD 导入说明，导入后生成的网格资源名称仍遵循 FBX 导入器的命名规则。规则与文件名、网格节点名及 Override FullName 等设置有关，不是所有 LOD 源网格都必须带 _LOD0、_LOD1 后缀。此题按“导入结果的命名”理解判为错误；若指源网格或文件如何取名，则需要结合导入方式区分。

[来源1](https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-import-static-mesh-lods?application_version=4.27)、[来源2](https://dev.epicgames.com/documentation/unreal-engine/fbx-import-options-reference-in-unreal-engine)

### 网页第 73 题 · 原题 122 · design-122

Maya软件多边形类型中"文本"选项卡参数的空间宽度比例是调整手动空间的宽度

参考答案 A（正确）。

Space Width Scale（空间宽度比例）调整文本中手动输入的空格宽度，默认值为 1；Leading Scale（前导比例）才用于调整多行文字的垂直间距。题干描述的是空格宽度，因此正确。

[来源1](https://help.autodesk.com/cloudhelp/2022/CHS/Maya-Modeling/files/GUID-92112B70-161B-4D89-A1E5-BC3D58274EFB.htm)

### 网页第 74 题 · 原题 124 · design-124

移动激光扫描系统主要由激光扫描仪和惯性导航系统组成

参考答案 B（正确）。

移动激光扫描系统可概括为激光测量与定位定姿两大部分。激光扫描仪获取距离和扫描数据，导航单元通常结合 GNSS 与 IMU 提供位置、姿态和轨迹，还配有同步、控制和存储等部件。按“主要组成”的概括口径，题干正确。

[来源1](https://www.riegl.com/en-australia/products/detail/riegl-vmx-3ha)、[来源2](https://www.riegl.com/en-australia/products/segment/mobile-laser-scanning)

### 网页第 89 题 · 原题 151 · design-151

"标准曲面材质"命令参数"透射"卷展栏中的色散系数是指定材质的色散系数，用于描述折射率随波长变化的程度，值越大，色散越多

参考答案 B（错误）。

Arnold 标准曲面的 Transmission Dispersion 使用阿贝数表示色散。启用色散后，阿贝数越小，色散越强；较大的阿贝数对应较弱的色散。0 是关闭色散的特殊值，题干把变化方向说反。

[来源1](https://help.autodesk.com/cloudhelp/ENU/AR-Core/files/ac-shading/ac-surface-shaders/ac-standard-surface/arnold_user_guide_ac_standard_surface_ac_transmission_html.html)

### 网页第 94 题 · 原题 161 · design-161

点云文件中的三维坐标指的是本地坐标系中的坐标

参考答案 A（错误）。

点云文件的坐标由其坐标参考系决定，可以采用扫描仪局部坐标，也可以经过配准或地理配准后采用工程、投影或地理坐标。LAS 等点云格式还可保存空间参考信息，不能把所有点云坐标一概视为本地坐标。

[来源1](https://pro.arcgis.com/en/pro-app/3.5/help/analysis/3d-analyst/understand-las-coordinate-system.htm)

### 网页第 96 题 · 原题 164 · design-164

测站设置原则是在可视范围内,保证90%以上数据的完整性,站站之间重复率20%\~30%左右

参考答案 A（正确）。

本题按原教材经验值口径保留“正确”，其具体适用设备和流程待核对。数据完整率和相邻测站重叠率会受扫描仪、遮挡、标靶布设和配准方法影响，不能把 90% 完整率及 20%～30% 重叠率当作所有设备的统一强制标准。

[来源1](https://knowledge.faro.com/Hardware/Focus/Focus/Laser_Scanner_Best_Practices)

### 网页第 122 题 · 原题 206 · design-206

PS软件Lab模式中的a通道是色相，包括的颜色值从深绿到灰,再到亮粉红色

参考答案 A（错误）。

Lab 的 L 通道表示明度，a 通道是绿到红的色度轴，b 通道是蓝到黄的色度轴。a 通道会影响颜色表现，但它不是 HSB 模型中的独立色相 H 通道，题干将两种模型的概念混淆。

[来源1](https://helpx.adobe.com/photoshop/desktop/adjust-color/choose-colors/color-modes-in-photoshop.html)、[来源2](https://helpx.adobe.com/photoshop/desktop/adjust-color/choose-colors/choose-colors-with-the-adobe-color-picker.html)

### 网页第 124 题 · 原题 209 · design-209

PS软件HSB模式只有在颜色吸取窗口中才会出现。H代表色相,S代表饱和度,B代表亮度

参考答案 B（错误）。

H、S、B 分别表示色相、饱和度和亮度。Photoshop 的拾色器和“颜色”面板均可使用 HSB 数值或滑块，因此“只有在颜色吸取窗口中才会出现”的限定错误。HSB 选色模型也不等同于图像菜单中的文档颜色模式。

[来源1](https://helpx.adobe.com/photoshop/desktop/adjust-color/choose-colors/choose-colors-in-the-color-panel.html)、[来源2](https://helpx.adobe.com/photoshop/desktop/adjust-color/choose-colors/choose-colors-with-the-adobe-color-picker.html)

### 网页第 125 题 · 原题 210 · design-210

PS软件"矩形选框"工具消除锯齿是用于清除选区边缘的锯齿

参考答案 A（错误）。

消除锯齿用于平滑选区边缘，但 Photoshop 的矩形选框工具没有可启用的消除锯齿选项。椭圆选框等工具才提供该设置；矩形选框可设置羽化，两者不应混淆。

[来源1](https://helpx.adobe.com/photoshop/using/selecting-marquee-tools.html)

### 网页第 130 题 · 原题 220 · design-220

Maya软件多边形圆柱体的参数高度细分数可以设置多边形圆柱体的高度分段数值。

参考答案 B（正确）。

多边形圆柱体的 Subdivisions Height 参数控制沿圆柱高度方向的分段数，增加该值会增加纵向分段，不会改变圆柱的总高度。

[来源1](https://help.autodesk.com/cloudhelp/2022/ENU/Maya-Basics/files/GUID-45D2EAD4-5BCF-42DA-A1AB-EC6EE09FE705.htm)

### 网页第 145 题 · 原题 252 · design-252

Maya软件曲面修改工具中的放样是可以根据选择的多条曲线来放样生成曲面模型

参考答案 B（正确）。

Maya 的 Loft（放样）通过依次选定的两条或多条轮廓曲线插值生成曲面。轮廓曲线决定曲面的截面形状；单条轮廓沿路径扫出的曲面属于挤出等其他操作。

[来源1](https://help.autodesk.com/cloudhelp/2020/ENU/Maya-Tech-Docs/Nodes/loft.html)

### 网页第 146 题 · 原题 253 · design-253

PS软件屏幕分辨率取决于显示器大小及其像素设置

参考答案 B（正确）。

本题按传统图像教材将“屏幕分辨率”用作单位长度像素数，即像素密度的口径保留“正确”。像素密度与物理尺寸、像素设置有关；如果“分辨率”指显示设置中的横向和纵向像素数量，则不能仅由显示器物理尺寸决定。原题术语需结合教材版本区分。

[来源1](https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/resize-adjust-resolution/monitor-resolution-and-image-display-size.html)

### 网页第 149 题 · 原题 257 · design-257

Skybox Textures都能用来代替实际的几何体物件并有效的提高性能

参考答案 B（正确）。

天空盒纹理可以高效模拟远景背景的几何细节，减少实际建模和渲染的开销，这是 UE4 官方性能指南列出的优化方法。该方法适用于背景表现，需要近距离观察、真实视差或碰撞交互的物体仍需合适的几何表示。

[来源1](https://dev.epicgames.com/documentation/unreal-engine/performance-guidelines-for-artists-and-designers?application_version=4.27)

### 网页第 162 题 · 原题 283 · design-283

UE4按下"T"键可以切换到Scale Tool(缩放工具)进行缩放操作

参考答案 A（错误）。

UE4 默认变换工具快捷键为 W 平移、E 旋转、R 缩放。切换到 Scale Tool 应按 R，题干所写的 T 不正确。

[来源1](https://dev.epicgames.com/documentation/en-us/unreal-engine/viewport-controls?application_version=4.27)

### 网页第 178 题 · 原题 303 · design-303

三维重建是将三维的物体在虚拟世界中重建出来

参考答案 A（正确）。

三维重建通过照片、扫描点云等测量资料恢复对象的几何与外观，在数字三维空间中重建真实物体或场景。因此题干对重建目标的概括成立。

[来源1](https://www.autodesk.com/solutions/reality-capture)、[来源2](https://www.realityscan.com/?lang=en-US)

### 网页第 194 题 · 原题 334 · design-334

UE4可以使用"E"键切换到Translation Tool(平移工具)进行移动操作

参考答案 A（错误）。

UE4 默认 W 对应 Translation/Move Tool，E 对应 Rotation Tool，R 对应 Scale Tool。因此用 E 切换平移工具的说法错误。

[来源1](https://dev.epicgames.com/documentation/en-us/unreal-engine/viewport-controls?application_version=4.27)

### 网页第 199 题 · 原题 342 · design-342

Maya软件曲线修改工具中的添加点工具是选择要添加点的曲线来进行加点操作

参考答案 B（正确）。

先选择需要延伸的曲线，使用 Curves > Add Points Tool，可在曲线末端添加 CV 或编辑点并继续延长曲线。它用于末端加点，不是泛指在曲线任意内部位置插入点。

[来源1](https://help.autodesk.com/cloudhelp/2027/ENU/Maya-Modeling/files/GUID-08E73E34-DEAE-4E5B-98DA-CFB4560C06E8.htm)

### 网页第 203 题 · 原题 346 · design-346

选择场景中的所有模型，单击"多边形建模"工具架上的"结合"图标，即可将多个模型组合为一个整体

参考答案 B（正确）。

对选中的多边形网格执行 Mesh > Combine，可以把它们合并为一个多边形网格对象。结果可以保留多个互不相连的网格壳；若需连续拓扑，还需另行合并顶点或执行布尔等操作。题干只说组合为一个整体，并未要求焊接，因此判正确。

[来源1](https://help.autodesk.com/cloudhelp/2022/ENU/Maya-Modeling/files/GUID-797DD7AE-11D4-4399-8B31-BA0B67D33650.htm)

### 网页第 204 题 · 原题 347 · design-347

从3D建模软件中导出网格体时，枢轴点坐标不必固定位于原点处(0,0,0)

参考答案 A（正确）。

题干未限定导出格式和导入方式，按通用三维资产制作口径，枢轴不必对所有用途固定在世界原点。需要区分的是，UE4 常规 FBX 静态网格流程以原点作为导出枢轴基准，官方建议在原点附近建模；Transform Vertex to Absolute、Bake Pivot in Vertex 等导入设置也会影响枢轴处理。

[来源1](https://dev.epicgames.com/documentation/en-us/unreal-engine/fbx-static-mesh-pipeline?application_version=4.27)、[来源2](https://dev.epicgames.com/documentation/en-us/unreal-engine/fbx-import-options-reference?application_version=4.27)

### 网页第 212 题 · 原题 361 · design-361

Maya软件在"多边形建模"工具架上右击"柏拉图多面体"图标可以创建多边形管道

参考答案 A（正确）。

在 Maya 2020 默认多边形建模工具架中，柏拉图多面体图标的右键菜单包含多边形管道创建命令。右击该图标并选择 Pipe 即可创建管道，因此题干所述入口存在。自定义工具架可能改变菜单内容。

[来源1](https://help.autodesk.com/cloudhelp/2024/ENU/Maya-Tech-Docs/CommandsPython/shelfButton.html)、[来源2](https://help.autodesk.com/cloudhelp/2026/ENU/Maya-Tech-Docs/CommandsPython/polyPipe.html)

本地核验依据为 Autodesk Maya 2020 随附脚本 C:/Program Files/Autodesk/Maya2020/scripts/shelves/shelf_Polygons.mel 第 87–101 行。polyPlatonicSolid.png 对应 shelfButton 的 -mi kPolyPipe 菜单项执行 CreatePolygonPipe。

### 网页第 214 题 · 原题 364 · design-364

Maya软件多边形管道的参数端面细分数可以设置多边形管道的端面分段数值

参考答案 A（正确）。

多边形管道的 Subdivisions Caps 控制两端环形端面沿壁厚方向的细分数；绕管道轴线一周的分段数由 Subdivisions Axis 控制。题干把端面细分用于端面分段，判断正确。

[来源1](https://help.autodesk.com/cloudhelp/2026/ENU/Maya-Tech-Docs/CommandsPython/polyPipe.html)

### 网页第 217 题 · 原题 368 · design-368

从3D建模软件中导出网格体时，枢轴点坐标必须固定位于原点处(0,0,0)

参考答案 B（错误）。

对一般三维软件和一般导出用途，不能要求枢轴一律固定在世界原点，故题干的绝对说法判错误。若采用 UE4 常规 FBX 静态网格流程，则应遵循其原点枢轴基准，并结合 Transform Vertex to Absolute、Bake Pivot in Vertex 等设置准备资产。

[来源1](https://dev.epicgames.com/documentation/en-us/unreal-engine/fbx-static-mesh-pipeline?application_version=4.27)、[来源2](https://dev.epicgames.com/documentation/en-us/unreal-engine/fbx-import-options-reference?application_version=4.27)

### 网页第 219 题 · 原题 371 · design-371

PS软件屏幕分辨率是显示器上每单位长度显示的像素数目

参考答案 B（正确）。

本题按传统图像教材的单位长度像素数口径保留“正确”，这一概念通常以 PPI 表示。现代显示设置中的“分辨率”也常指横向与纵向像素数量，两者应区分；题干采用的术语口径仍待原教材确认。

[来源1](https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/resize-adjust-resolution/image-size-resolution-and-resampling.html)、[来源2](https://help.adobe.com/archive/it/photoshop/cs6/photoshop_reference.pdf)

### 网页第 224 题 · 原题 383 · design-383

移动测绘系统MMS包括移动激光扫描系统和惯性导航系统组成

参考答案 B（正确）。

移动激光测绘系统通常结合激光扫描与位置姿态测量，其中包含 GNSS/惯性导航或 IMU 等设备，也可配备相机和里程计。题干使用“包括”，列出激光扫描系统和惯性导航系统，并未断言只有这两项，判断正确。

[来源1](https://help.fieldsystems.trimble.com/tbc/22503.htm)、[来源2](https://www.riegl.com/en-uk/products/segment/mobile-laser-scanning)

### 网页第 225 题 · 原题 386 · design-386

Maya软件多边形圆柱体的参数端面细分数可以设置多边形圆柱体的端面分段数值

参考答案 A（正确）。

多边形圆柱体的 Subdivisions Caps 控制上下端面的细分层数；圆周方向的分段数由 Subdivisions Axis 控制，两者不能混淆。题干说明端面细分控制端面分段，判断正确。

[来源1](https://help.autodesk.com/cloudhelp/2026/ENU/Maya-Tech-Docs/CommandsPython/polyCylinder.html)、[来源2](https://help.autodesk.com/cloudhelp/2022/ENU/Maya-Basics/files/GUID-45D2EAD4-5BCF-42DA-A1AB-EC6EE09FE705.htm)

### 网页第 227 题 · 原题 388 · design-388

Maya软件按下快捷键Ctrl+A是复制模型

参考答案 A（错误）。

Maya 默认 Ctrl+A 用于打开属性编辑器，并在属性编辑器与通道盒之间切换；复制对象的常用快捷键是 Ctrl+D。因此题干把 Ctrl+A 说成复制模型，判断错误。

[来源1](https://help.autodesk.com/cloudhelp/2024/ENU/Maya-Basics/files/GUID-67A58D31-4722-4769-B3E6-1A35B5B53BED.htm)

### 网页第 230 题 · 原题 391 · design-391

材质的通用属性"镜面反射着色"偏心率是指该参数用来控制高光扩散的大小，数值越大，高光点就越小。

参考答案 B（错误）。

Blinn 材质的 Eccentricity 控制镜面高光的大小。在正常参数范围内，较大的值使高光更宽、更大，较小的值使高光更小、表面显得更光滑。题干把数值增大与高光缩小的关系写反，判断错误。

[来源1](https://help.autodesk.com/cloudhelp/2024/ENU/Maya-Tech-Docs/Nodes/blinn.html)

### 网页第 235 题 · 原题 406 · design-406

各项异性材质"光线跟踪选项"卷展栏中的表面厚度是控制材质所要模拟的厚度

参考答案 B（正确）。

Surface Thickness 用于在光线跟踪时，为由单一曲面构成的透明对象模拟表面厚度，例如单层车窗曲面。它影响透明对象的折射表现，与实际建出厚度的几何并不完全相同。题干所述模拟厚度的作用正确。

[来源1](https://help.autodesk.com/cloudhelp/2022/ENU/Maya-LightingShading/files/GUID-426A7F26-4647-4DC4-B390-6380620AD757.htm)

## 待核对题目

这些条目没有足够依据直接改变判分，需结合原教材、软件版本或完整题干继续核对。

| 网页题号 | 原题号 / ID | 当前答案 | 待核对原因与来源 |
| --- | --- | --- | --- |
| 13 | 22 / design-22 | A（错误） | 未找到适用于所有扫描仪的80%完整率、40%站间重叠判定标准，原解析“规范90%、20–30%”仅用同题库互证，来源不足。 [来源1](https://knowledge.faro.com/Software/FARO_Connect/Connect/FARO_Connect_Overview) |
| 59 | 97 / design-97 | B（正确） | Specular Roll Off在Blinn中描述斜视角反射能力，在Ramp Shader中是高光强度渐变。官方文档未支持原解析中“数值越小，衰减越弱、高光越强”的通用反比断言，题干又未指明着色器。 [来源1](https://help.autodesk.com/cloudhelp/2025/CHS/Maya-LightingShading/files/GUID-13C10DF8-5CB4-49D2-9456-DCC1B7F1653C.htm)、[来源2](https://help.autodesk.com/cloudhelp/2022/CHS/Maya-LightingShading/files/GUID-022F69B8-B1A3-46A3-9917-0D9CBDBB6733.htm) |
| 70 | 118 / design-118 | A（错误） | 题干的网格体命名可能指源文件、FBX节点或生成资源，三者不相同。 [来源1](https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-import-static-mesh-lods?application_version=4.27)、[来源2](https://dev.epicgames.com/documentation/unreal-engine/fbx-import-options-reference-in-unreal-engine) |
| 82 | 134 / design-134 | A（正确） | Maya支持HSV与RGB选色，官方文档未明确跨版本一律默认HSV；原题未指定版本。 [来源1](https://help.autodesk.com/cloudhelp/2022/ENU/Maya-Basics/files/GUID-0D684939-43C1-4DDC-88B3-8CC43378C9C3.htm) |
| 83 | 136 / design-136 | A（错误） | 单台普通相机直接记录二维图像与颜色；但数码相机结合多视图摄影测量确实可用于恢复三维坐标。题干只说“用于”，原解析自行加了“单独直接”的限定。 [来源1](https://dev.epicgames.com/community/learning/tutorials/k4ve/unreal-engine-capturing-reality-what-is-photogrammetry) |
| 96 | 164 / design-164 | A（正确） | 布站覆盖率与重叠率应随设备、场景、标靶或云配准流程而定，未找到支持90%与20%至30%作为普遍强制规则的官方条款。 [来源1](https://knowledge.faro.com/Hardware/Focus/Focus/Laser_Scanner_Best_Practices) |
| 97 | 165 / design-165 | A（正确） | 较正面观察和减少掠射是合理原则，但“测站与对象平面垂直”没有明确是扫描射线、扫描仪轴线还是标靶；扫描目标材质也可能改变最佳入射方向。 [来源1](https://knowledge.faro.com/Hardware/Focus/Focus/Laser_Scanner_Best_Practices) |
| 100 | 169 / design-169 | B（正确） | Adobe把普通360视频称为不含场景对象交互，同时允许观看方向交互；另有叠加热点等交互视频。题干“可交互性”没有界定。 [来源1](https://helpx.adobe.com/premiere-elements/desktop/vr-and-360-editing.html) |
| 144 | 251 / design-251 | A（正确） | Subdivisions Axis官方控制绕轴圆周分段，沿轴长度分段实际由Subdivisions Height控制。题干“轴向分段”既可当参数名复述，也可理解成沿轴分段。 [来源1](https://help.autodesk.com/cloudhelp/2022/ENU/Maya-Basics/files/GUID-45D2EAD4-5BCF-42DA-A1AB-EC6EE09FE705.htm)、[来源2](https://help.autodesk.com/cloudhelp/2019/CHS/Maya-Tech-Docs/PyMel/generated/functions/pymel.core.modeling/pymel.core.modeling.polyPipe.html) |
| 146 | 253 / design-253 | B（正确） | Adobe把显示器分辨率定义为像素尺寸，物理尺寸影响像素密度或图像显示大小。传统教材有时用每单位长度像素数来称屏幕分辨率，题干未区分。 [来源1](https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/resize-adjust-resolution/monitor-resolution-and-image-display-size.html) |
| 205 | 348 / design-348 | B（错误） | 题干是数字图像处理的教材式概括，像素值运算可能按各颜色通道的强度值广义理解，也可能按仅处理单通道灰度的狭义理解。当前解析采用狭义否定，未获得该题课程对“灰度值运算”的明确定义。 [来源1](https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/resize-adjust-resolution/image-size-resolution-and-resampling.html) |
| 219 | 371 / design-371 | B（正确） | 屏幕分辨率在旧版 Photoshop 教材中常按每英寸像素数描述，当前通用显示设置又常指横纵像素总数，术语版本不同。 [来源1](https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/resize-adjust-resolution/image-size-resolution-and-resampling.html)、[来源2](https://help.adobe.com/archive/it/photoshop/cs6/photoshop_reference.pdf) |
| 221 | 376 / design-376 | A（正确） | 题干“可以将旋转曲面模型”缺少完整的动作或宾语，实际 Revolve 功能可以核实，但无法严格评价缺字句子。 [来源1](https://help.autodesk.com/cloudhelp/2025/ENU/Maya-Tech-Docs/Commands/revolve.html) |

## 本地错题汇总中的判断题复核

- 第 162、203 题已在本次修正。
- 第 42 题保留“错误”。Photoshop 通道位深也可为 16 或 32 位。[来源1](https://helpx.adobe.com/photoshop/desktop/adjust-color/choose-colors/color-modes-in-photoshop.html)
- “建模工具包桥接”对应网页第 60 题，现答案已为 B（正确）。[来源1](https://help.autodesk.com/cloudhelp/2023/ENU/Maya-Modeling/files/GUID-C8EC81A1-46B2-498C-A759-7DC304D8B687.htm)
- 第 109 题保留“错误”。Planar 以共面的闭合曲线创建平面曲面，原题写的是闭合“曲面”。[来源1](https://help.autodesk.com/cloudhelp/2025/ENU/Maya-Tech-Docs/Commands/planarSrf.html)
- 第 144 题保留当前答案并列为术语待核对。Subdivision Axis 对应绕轴圆周细分，沿高度分段由 Subdivision Height 控制。

## 更新后的记录判定

题号与题目 ID 保持稳定。刷新新版后，已有作答记录会依照新参考答案重新显示正确或错误，错题数量及正确率可能随之变化。模拟卷也采用更新后的同一题库。

## 验证记录

- 已确认逐题复核范围完整覆盖网页判断题第 1–236 题。
- 已检查答案字母与选项文字的对应关系，并核对重复题的一致性。
- 已通过 Vite 生产构建，题库仍为 544 题，其中内容设计判断题为 236 题。
- 已验证 35 道修订题的网页答案与完整解析；其余 509 道题的数据逐字段一致。
- 已验证旧答题记录会按新答案重新判分，基础知识记录和收藏可继续使用。
- 已验证模拟卷使用新版题库答案评分。
