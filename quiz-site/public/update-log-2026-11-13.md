# 内容设计判断题更新日志

## 用户错题汇总补充修订（2026-11-13）

依据用户提供的《题库内容设计部分错题汇总.md》及本聊天确认，将当前网页所列 21 道判断题全部反转，并将 32 道单选题统一设为文档指定的单个答案。以下是考试判分口径，涉及技术定义差异时，解析中明确保留知识核对说明。判断题段落中的第 24 条按其题干和 D 答案归入单选题第 24 题。

本节为当前修订记录，下方此前的逐题审校记录保留为历史参考；同一题以本节及当前网页显示的参考答案为准。网页题号仍按内容设计模块各题型的全部题目默认顺序对应。

| 题型 | 网页题号 | 原题号 / ID | 修改前 | 修改后 | 更新解析 |
| --- | --- | --- | --- | --- | --- |
| 判断 | 59 | design-97 | B（正确） | A（错误） | 按你提供的考试判分口径，本题判“错误”。镜面反射衰减不能简单理解成数值与高光强度的统一反比关系。Maya 的 Specular Roll Off 与着色器及观察角度有关，题干“数值越小，高光就越强”的绝对概括不宜直接套用。 |
| 判断 | 205 | design-348 | B（错误） | A（正确） | 按你提供的考试判分口径，本题判“正确”。本题采用数字图像处理的基础教材口径，把图像表示为像素及各通道强度值，并把图像运算概括为像素灰度或强度值的处理。彩色图像可以包含多个通道，实际图像处理还可涉及几何变换、频域等操作。 |
| 判断 | 100 | design-169 | B（正确） | A（错误） | 按你提供的考试判分口径，本题判“错误”。全景视频至少允许观看者改变观看方向，播放系统还可以叠加热点和交互入口。因此“没有可交互性”的绝对说法按本题口径判错；观看方向或热点交互与自由操作实时三维场景仍有区别。 |
| 判断 | 42 | design-71 | B（错误） | A（正确） | 按你提供的考试判分口径，本题判“正确”。本题按常见 8 位/通道图像的教材前提记忆，每通道有 256 个离散级别，对应 0～255。技术核对时需注意 Photoshop 也支持 16 位和 32 位/通道，题干未写出的 8 位前提不能推广成软件的全部情况。 |
| 判断 | 203 | design-346 | B（正确） | A（错误） | 按你提供的考试判分口径，本题判“错误”。本题指定判分与一般 Maya 功能定义存在差异。Mesh > Combine 确实可以把选定的多边形网格组合为一个网格对象，但不会自动焊接所有顶点，也不保证形成连续实体。若按“整体”必须是连续拓扑的考试口径，本题判错。 |
| 判断 | 109 | design-190 | A（错误） | B（正确） | 按你提供的考试判分口径，本题判“正确”。本题按教材对平面曲面生成功能的概括判分。技术上 Maya Planar 的常见输入是共面的闭合曲线，由它生成平面曲面；原题写成“闭合的曲面”，与通常的输入类型定义存在差异。 |
| 判断 | 144 | design-251 | A（正确） | B（错误） | 按你提供的考试判分口径，本题判“错误”。本题按“轴向”表示沿管道高度方向分段的口径判错。Maya 参数 Subdivisions Axis 实际控制绕轴圆周方向的细分，沿高度方向的细分由 Subdivisions Height 控制，需区分参数名称与日常方向用语。 |
| 判断 | 69 | design-117 | A（错误） | B（正确） | 按你提供的考试判分口径，本题判“正确”。本题按教材对明亮程度的概括判分，黑色的亮度为 0。严格按 HSB 模型，亮度 B 与饱和度 S 是不同属性，B 达到最大并不保证颜色最鲜艳或呈白色，原题“最鲜明”的用词需结合考试口径理解。 |
| 判断 | 125 | design-210 | A（错误） | B（正确） | 按你提供的考试判分口径，本题判“正确”。本题按“消除锯齿用于平滑选区边缘”的通用功能口径判分。技术核对时，Photoshop 矩形选框工具并不提供可启用的消除锯齿选项，椭圆选框等工具才有该设置；原题指定工具与通用功能存在差异。 |
| 判断 | 201 | design-344 | A（错误） | B（正确） | 按你提供的考试判分口径，本题判“正确”。本题按你提供的教材判分用语记忆。技术定义中，Lab 的 b 通道是蓝—黄方向的色度轴，灰色位于中性位置，并不是 HSB 模型中的饱和度 S 通道；“饱和度”这一表述与标准颜色模型有差异。 |
| 判断 | 137 | design-235 | A（错误） | B（正确） | 按你提供的考试判分口径，本题判“正确”。本题采用你指定的软件输出口径。应区分导出图像或数值采样设置与实际采集到的几何细节：调整输出分辨率或插值不能凭空恢复扫描时没有记录的真实细节。原题没有指明输出对象和具体版本。 |
| 判断 | 138 | design-237 | A（错误） | B（正确） | 按你提供的考试判分口径，本题判“正确”。本题按常见 8 位灰度图的教材口径记忆，8 位灰度可表示 256 个灰阶。Photoshop 灰度图也可采用 16 位或 32 位深度，所以“灰度图”与“8 位深度图”在完整的软件定义中并非等同概念。 |
| 判断 | 122 | design-206 | A（错误） | B（正确） | 按你提供的考试判分口径，本题判“正确”。本题采用你指定的教材判分用语。严格按 Lab 模型，a 通道是绿—红方向的色度轴，中性值对应灰色，它影响颜色表现，但不是 HSB 模型中的独立色相 H 通道。 |
| 判断 | 204 | design-347 | A（正确） | B（错误） | 按你提供的考试判分口径，本题判“错误”。本题按 UE4 常规 FBX 静态网格导出流程理解。该流程以原点作为导出枢轴基准，官方建议在原点附近制作资产，因此“不必固定于原点”按本题口径判错。一般三维软件的其他导出用途和特殊导入设置可能有不同处理。 |
| 判断 | 208 | design-355 | A（错误） | B（正确） | 按你提供的考试判分口径，本题判“正确”。本题采用你指定的考试判分答案。技术核对时，Lab 的 L 表示明度 Lightness，透明度通常由 Alpha 等机制表达；原题把 L 写成透明度，与标准 Lab 定义存在差异。 |
| 判断 | 88 | design-150 | B（正确） | A（错误） | 按你提供的考试判分口径，本题判“错误”。本题按区分传感器直接输出职责的考试口径判错。激光扫描提供空间测量数据，数码相机记录二维图像和颜色；二者配准后实际能够形成带颜色的点云，因此原题“根据两者数据可以得到点云”的广义表述与指定判分存在差异。 |
| 判断 | 224 | design-383 | B（正确） | A（错误） | 按你提供的考试判分口径，本题判“错误”。本题按完整系统组成的考试口径判错。移动测绘系统除了激光扫描与惯性测量，还可能包括 GNSS、相机、同步控制及存储等部分。原题使用“包括”时也可理解为列举部分组成，因此指定判分与宽泛表述存在口径差异。 |
| 判断 | 18 | design-29 | A（错误） | B（正确） | 按你提供的考试判分口径，本题判“正确”。本题采用你指定的教材判分答案。严格按 Lab 颜色模型，三个通道是明度 L、绿—红色度轴 a 和蓝—黄色度轴 b，题干列出的“透明度、色相、饱和度”并非标准 Lab 通道定义。 |
| 判断 | 83 | design-136 | A（错误） | B（正确） | 按你提供的考试判分口径，本题判“正确”。本题按摄影测量完整流程理解。数码相机提供图像与颜色资料，结合多视图匹配、相机标定等处理，可恢复对象的三维坐标。普通单幅图像本身并不直接提供每个点的三维坐标。 |
| 判断 | 221 | design-376 | A（正确） | B（错误） | 按你提供的考试判分口径，本题判“错误”。本题原句“可以将旋转曲面模型”缺少完整的动作描述，按你指定的考试答案判错。Revolve 的实际作用是使轮廓曲线绕指定轴旋转并生成旋转曲面，需与单纯旋转已有对象的变换操作区分。 |
| 单选 | 24 | design-53 | A（stl）、D（jpg） | D（jpg） | 按你提供的考试判分口径，本题选择 D。JPG 是二维有损图像格式，不是保存三维点坐标的点云格式。本题按指定的单选答案选 JPG；STL 通常保存三角网格，也应与原始点云格式区分，原题选项分类存在不唯一性。 |
| 判断 | 217 | design-368 | B（错误） | A（正确） | 按你提供的考试判分口径，本题判“正确”。本题按 UE4 常规 FBX 静态网格导出流程记忆原点枢轴约定，并与第 204 题保持互补。通用三维资产的其他导出格式或特殊导入设置不一定采用同一约定，题干未明确这些适用条件。 |
| 单选 | 105 | design-247 | A（曲面修改工具中的取消修剪工具是可以取消对曲面的修剪操作）、B（曲面修改工具中的分离曲面是可以根据曲面模型上所选择的等参线来分离曲面线）、C（曲面修改工具中的修剪工具是可以根据曲面上的曲线来对曲面进行修剪操作）、D（曲面修改工具中的附加曲面是可以将两个曲面模型附加为一个曲面模型） | D（曲面修改工具中的附加曲面是可以将两个曲面模型附加为一个曲面模型） | 按你提供的考试判分口径，本题选择 D。Attach Surfaces 用于在适用边界和参数条件下连接曲面，不表示任意两个曲面都能无条件成为一个连续曲面。本题按文档指定 D 判分，其他选项中“曲面线”等用词也需结合教材原意辨别。 |
| 单选 | 44 | design-110 | D（Faro scene可以从低分辨率扫描中输出高分辨率） | A（Faro scene可以以*.fbx格式导出和导入带纹理网格的三维模型） | 按你提供的考试判分口径，本题选择 A。本题按你提供的 SCENE 功能对照选择 FBX 双向导入导出这项。复习时应核对对应版本的支持格式，并区分点云数据、网格模型和关联纹理，不应把支持一种数据的导入导出推断成支持任意三维格式。 |
| 单选 | 150 | design-362 | D（横向分段） | B（竖向分段） | 按你提供的考试判分口径，本题选择 B。NURBS 球体的 Sections 对应绕旋转轴分布的截面线，按本题的线条方向称为竖向分段；Spans 对应与其交叉方向的跨度。两项参数控制的方向应区分。 |
| 单选 | 159 | design-382 | A（二个） | C（三个） | 按你提供的考试判分口径，本题选择 C。采用相邻测站公共标靶配准的教材口径，需要至少三个清晰可识别、分布合理且不共线的公共标靶或特征点，用于稳定确定站间空间关系。 |
| 单选 | 3 | design-7 | B（文件是可以使用文件纹理节点为物体赋予纹理贴图） | D（渐变是常用来制作一些特殊的效果） | 按你提供的考试判分口径，本题选择 D。本题采用文档指定的 D。技术上，Ramp 渐变纹理确实可以用于制作多种效果，而 File 节点读取外部图像，不是程序生成的纹理；因此本题设问与指定参考答案存在教材分类口径差异。 |
| 单选 | 152 | design-369 | B（按住Shift键创建锚点时,将强迫系统以45°或45°的倍数绘制路径） | C（反复按Ctrl+P组合键可以使用钢笔工具） | 按你提供的考试判分口径，本题选择 C。Photoshop 的钢笔工具快捷键是 P，Ctrl+P 通常调用打印命令。Ctrl 临时启用直接选择，Alt 可切换转换点操作，Shift 用于方向约束，所以错误的快捷键描述是 C。 |
| 单选 | 114 | design-264 | C（曲面修改工具中的倒角是可以根据一条曲线生成带有倒角的曲面模型） | A（曲面修改工具中的双轨成形1工具是可以让一条轮廓线沿着两条曲线进行扫描从而生成曲面线） | 按你提供的考试判分口径，本题选择 A。双轨成形 1（Birail 1）让一条轮廓线沿两条轨道生成曲面，而不是生成“曲面线”。A 把结果类型写错，因此按本题选 A。 |
| 单选 | 19 | design-45 | D（NURBS圆形次数是用于设置NURBS圆形的显示方式，有"线性"和"立方"两种选项可选） | A（NURBS圆形扫描是用于设置NURBS圆形的弧长范围，当值为180，则可以得到一个圆弧） | 按你提供的考试判分口径，本题选择 A。本题采用文档指定的 A。通常 Maya Sweep 使用角度控制圆的截取范围，180 度可得到半圆弧，因此 A 的普通几何描述本身成立；该题“描述错误”的设问与指定判分存在差异。 |
| 单选 | 128 | design-310 | D（竖向分段） | C（横向分段） | 按你提供的考试判分口径，本题选择 C。本题按教材用等参线方向命名的口径选择横向分段。NURBS 圆柱的 Spans 控制与 Sections 交叉方向的分段，默认直立圆柱上可表现为横向环线；需与圆柱高度、半径等尺寸参数区分。 |
| 单选 | 76 | design-181 | C（VR全景视频通过VR全景相机的拍摄和计算机软件的后期剪辑处理得到的三维空间视频） | B（VR全景视频不具有可交互性） | 按你提供的考试判分口径，本题选择 B。本题把观看方向、热点等交互也计入“可交互性”，因此“VR 全景视频不具有可交互性”的绝对表述被判为错误。普通预录制全景视频不能等同于可自由操作场景物体的实时三维程序。 |
| 单选 | 69 | design-168 | C（添加点工具是选择要添加点的曲线来进行加点操作） | A（偏移曲线是将曲线移动并偏移一些） | 按你提供的考试判分口径，本题选择 A。Offset Curve 生成并偏移一条曲线的副本，不是仅把原曲线移动到另一位置。A 对复制与移动的含义混淆，按本题选 A。 |
| 单选 | 102 | design-243 | A（材质和纹理的样例生成是可以该按钮提示用户现在可以启用材质和纹理的样例生成功能） | B（图标是可以以列表的方式显示材质球） | 按你提供的考试判分口径，本题选择 B。Hypershade 的图标显示与列表显示是不同浏览模式。“图标”并非“以列表方式显示材质球”，B 将两种模式混淆。 |
| 单选 | 67 | design-160 | A（扫描、半径、次数、分段数） | B（扫描、半径、细分数、分段数） | 按你提供的考试判分口径，本题选择 B。本题按文档给出的 B 判分。技术核对时，Maya NURBS Circle 常见创建参数包含 Sweep、Radius、Degree 和 Sections，Degree 对应次数；B 中“细分数”的具体指代需结合教材界面确认。 |
| 单选 | 30 | design-73 | A（jpg）、B（stl） | A（jpg） | 按你提供的考试判分口径，本题选择 A。JPG 用于二维图像，不能作为通用三维点坐标存储格式。本题按指定的单选口径选 A；STL 保存三角网格，也需和点云数据格式区分。 |
| 单选 | 74 | design-178 | A（Global Illumination是影响光团发出的间接光照，从而改变场景的亮度、颜色或色调） | D（Bloom是用于对摄像机应用效果） | 按你提供的考试判分口径，本题选择 D。Bloom 用于表现明亮区域向周围扩散的辉光效果。D 仅写“对摄像机应用效果”，未说明 Bloom 的具体作用，本题采用文档指定的 D 作为错误描述。 |
| 单选 | 88 | design-217 | D（曲面修改工具中的平面是可以根据闭合的曲面来生成曲面模型） | C（曲面修改工具中的旋转是可以根据选择的曲线来旋转生成一个旋转模型） | 按你提供的考试判分口径，本题选择 C。本题按文档指定 C 判分。技术上 Revolve 确实依据轮廓曲线绕轴生成旋转曲面，“旋转模型”是较笼统的称呼；同时 Planar 通常以闭合曲线而不是闭合曲面为输入，原题选项用词存在歧义。 |
| 单选 | 155 | design-375 | B（比例是控制灯光在再度反射出曲面前在曲面下可能传播的距离） | C（半径是用来设置光线在次表面散射半径大小） | 按你提供的考试判分口径，本题选择 C。本题按文档指定 C 判分。标准曲面的 Subsurface Radius 与散射距离及各颜色通道有关，Scale 对距离进行整体缩放。C 的通俗描述与半径实际用途相近，因此指定答案需按本题考试口径记忆，不能据此否认半径对散射距离的作用。 |
| 单选 | 154 | design-373 | A（NURBS圆柱体参数中的跨度数是可以设置NURBS圆柱体的竖向分段） | C（NURBS圆柱体参数中的半径是可以设置NURBS圆柱体的半径大小和高度） | 按你提供的考试判分口径，本题选择 C。在 Height Ratio 保持不变时，增大 NURBS 圆柱的 Radius 会同时增大横向尺寸与相应高度，因此 C 描述了半径调整时的联动效果。单独调整高宽比例则属于 Height Ratio。 |
| 单选 | 39 | design-99 | B（单击Add/Import按钮并选择弹出内容的Import to按钮） | D（选择新建目录New Folder并在"/Game"之下创建新建目录） | 按你提供的考试判分口径，本题选择 D。新建目录属于可选的资源整理准备，不是每次导入网格都必须执行的步骤。通过内容浏览器选择导入、确认导入选项并保存资源，才是实际导入与保存流程。 |
| 单选 | 143 | design-340 | B（让导入器三角剖分网格体。无法进行清理，但适用于简单网格体） | A（让FBX导出器三角剖分网格体。可以进行清理，但适用于简单网格体） | 按你提供的考试判分口径，本题选择 A。让 FBX 导出器执行三角剖分时，三角形划分由导出阶段生成，不能等同于在三维软件中预先三角化后再清理和修改。A 把两种流程的控制能力混淆。 |
| 单选 | 47 | design-114 | B（"挤出"卷展栏捕捉到栅格，当启用时，"挤出剖面曲线"中的控制点捕捉到经过的图形点） | D（"挤出"卷展栏轮廓，该软件为用户提供了6个预设的图形来控制挤出的形状） | 按你提供的考试判分口径，本题选择 D。本题采用文档指定的 D。挤出轮廓决定文字挤出截面的形状，预设与自定义轮廓的数量取决于版本和界面，不能脱离版本把它固定概括为“6 个预设图形”。 |
| 单选 | 158 | design-380 | B（要与扫描对象平面垂直） | A（在可视范围内,保证70%以上数据的完整性,站站之间重复率40%\~50%左右） | 按你提供的考试判分口径，本题选择 A。本题按指定测站布设教材口径判定 A 所列完整率与重叠率组合不符合要求。具体覆盖和重叠要求会随扫描仪、场景、标靶和配准方式变化，不能把本题数字推广成所有设备的通用标准。 |
| 单选 | 170 | design-404 | D（在透视口中，按数字键2键，可以向后移动相机） | B（在透视口中，按Z键，可以推进相机(降低视场)） | 按你提供的考试判分口径，本题选择 B。UE4 默认飞行控制中，Z 用于增大视场，表现为拉远；C 用于减小视场，表现为推进。B 把 Z 与“推进、降低视场”对应，方向写反。使用数字小键盘时还需区分其键位与主键盘数字键。 |
| 单选 | 107 | design-250 | C（NURBS球体参数中的次数分别有"Linear(线性)"和"Cubic(立方)"两种方式可选，用来控制球体的显示结果） | B（NURBS球体参数中的分段数是可以设置球体模型的横向分段） | 按你提供的考试判分口径，本题选择 B。NURBS 球体的 Sections 按本题教材对应竖向截面分布，B 将其说成横向分段，因此选 B。Spans 控制交叉方向的分段，Degree 另用于设置曲线或曲面的次数。 |
| 单选 | 75 | design-180 | C（在透视口中，使用鼠标左键+拖动，可以前后移动相机，及左右旋转相机） | D（在透视口中，鼠标右键+拖动，可以旋转视口相机） | 按你提供的考试判分口径，本题选择 D。本题按文档指定 D 判分。需注意 UE4 官方默认透视视口操作中，按住鼠标右键拖动确实用于旋转观察方向，因此这项指定答案与通常操作定义有差异，不能把它当作软件实际快捷操作的反例。 |
| 单选 | 61 | design-148 | D（Ambient Occlusion是近似模拟出因吸收造成的光线衰减效果） | C（Actor是用于在Actor 上放置标签） | 按你提供的考试判分口径，本题选择 C。Actor 是可放入关卡的对象，Details 中 Actor 相关属性还可包括标签等内容。把 Actor 简单等同于“在 Actor 上放置标签”并不完整，本题按文档选择 C。 |
| 单选 | 113 | design-263 | B（镜面反射颜色是指该参数用于控制反射的颜色，可双击色块选择需要的反射颜色） | A（偏心率是指该参数用来控制高光扩散的大小，数值越大，高光点就越大） | 按你提供的考试判分口径，本题选择 A。Blinn 材质的偏心率 Eccentricity 控制高光大小，正常参数范围内数值增大时高光范围变大。A 的方向描述正确，其余选项混淆了高光颜色、反射颜色或衰减关系。 |
| 单选 | 93 | design-223 | A（PSD格式和PDD格式能够保存图像数据的细节部分,如图层、附加的蒙版通道等图像特殊处理的信息）、C（TIF格式是标签图像格式。TIF格式对于色彩通道图像来说是最有用的格式,具有很强的可移植性）、D（PNG格式是用于无损压缩和在Web上显示图像的文件格式） | B（GIF格式的图像文件容量非常大,它形成一种压缩的8bit图像文件） | 按你提供的考试判分口径，本题选择 B。本题采用文档指定的 B。技术上 GIF 是支持压缩的索引色图像格式，最多使用 256 色，文件容量取决于尺寸、内容和动画帧数，不能笼统断言“容量非常大”；原题“描述正确”的设问与指定参考答案存在差异。 |
| 单选 | 57 | design-140 | D（EP曲线在"控制顶点"层级中,可以通过更改曲线的控制顶点位置来改变曲线的形状） | B（EP曲线常用参数结间距是指定该软件如何将U位置值指定给结） | 按你提供的考试判分口径，本题选择 B。Knot Spacing（结间距）用于确定如何给曲线的结分配 U 参数位置。EP 曲线由编辑点创建，但建立后仍有控制顶点等组件可编辑，不能把 EP 与 CV 当作完全互斥的曲线数据类型。 |
| 单选 | 120 | design-280 | D（权重是用于设置灯光穿过物体表面所产生的散射权重） | B（色散系数是指定材质的色散系数，值越大，色散越多） | 按你提供的考试判分口径，本题选择 B。标准曲面的色散参数采用阿贝数表示时，数值越小通常色散越强；0 为关闭色散的特殊值。B 的“值越大，色散越多”把变化方向说反。 |
| 单选 | 60 | design-143 | B（高光大小是控制镜面反射高光的数量） | C（反射率是控制材质反射的颜色） | 按你提供的考试判分口径，本题选择 C。Reflectivity 反射率控制反射贡献的强弱，反射颜色由相应颜色属性定义。C 将反射率说成控制反射颜色，按本题选 C；“高光大小”也应理解为范围大小，不能理解成高光个数。 |

已核对 53 个网页题号、题干和选项映射，并逐题验证全部 53 个答案及解析的网页显示与判分。其余 491 道题的数据逐字段一致，旧答题记录和收藏恢复检查通过。更新保留稳定题目 ID，已有作答与模拟考试会按新参考答案重新判分。

---

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
