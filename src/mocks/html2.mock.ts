export const initHtml2 = `<!DOCTYPE html>
<html>
<head>
</head>
<body>
<h2 class="header" style="box-sizing: inherit; font-family: 'PingFang SC', 'Helvetica Neue', 'Microsoft YaHei UI', 'Microsoft YaHei', 'Noto Sans CJK SC', Sathu, EucrosiaUPC, Arial, Helvetica, sans-serif; line-height: 1.28571em; margin: 0px 0px 1rem; padding: 0px; word-break: break-word; overflow-wrap: break-word; color: rgba(0, 0, 0, 0.87); background-color: #ffffff;">Blender 2.80 稳定版发布：重新设计的 UI、全新的 Workspace、所见即所需和暗黑模式等</h2>
<div id="articleContent" class="content" style="box-sizing: inherit; word-break: break-word; overflow-wrap: break-word; font-size: 16px; font-family: 'Pingfang SC', STHeiti, 'Lantinghei SC', 'Open Sans', Arial, 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', SimSun, sans-serif; color: #333333; line-height: 28px; margin-top: 2rem; background-color: #ffffff;">
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;"><a style="box-sizing: inherit; background-color: transparent; color: #4183c4; text-decoration-line: none;" href="https://www.blender.org/download/releases/2-80/" target="_blank" rel="noopener">Blender&nbsp;2.80 稳定版已于昨天正式发布</a>，这是一个重大升级版本，其中值得关注的更新内容包括：<span style="box-sizing: inherit; font-weight: bold;">引入了重新设计的 UI</span>、<span style="box-sizing: inherit; font-weight: bold;">新增暗黑模式</span>、<span style="box-sizing: inherit; font-weight: bold;">引入新的基于物理的实时渲染引擎 EEVEE</span>、<span style="box-sizing: inherit; font-weight: bold;">新的渲染引擎 Workbench</span>、<span style="box-sizing: inherit; font-weight: bold;">Collection 功能</span>以及&nbsp;<span style="box-sizing: inherit; font-weight: bold;">2D 绘画和动画系统 Grease Penci</span>&nbsp;等。</p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;"><img class="zoom-in-cursor" style="box-sizing: border-box; border: 0px; margin: auto; max-width: 80%; vertical-align: middle; cursor: zoom-in;" src="https://static.oschina.net/uploads/space/2019/0801/072738_8gJF_2720166.jpg" /></p>
<h3 style="box-sizing: inherit; font-family: 'PingFang SC', 'Helvetica Neue', 'Microsoft YaHei UI', 'Microsoft YaHei', 'Noto Sans CJK SC', Sathu, EucrosiaUPC, Arial, Helvetica, sans-serif; line-height: 1.28571em; margin: 1.2em 0px 0.8em; font-weight: 500; padding: 0px; font-size: 20px; border: none;"><a style="box-sizing: inherit; background-color: transparent; color: #4183c4; text-decoration-line: none;" href="https://wiki.blender.org/wiki/Reference/Release_Notes/2.80/UI" target="_blank" rel="noopener"><span style="box-sizing: inherit; font-weight: bold;">重新设计的 UI</span></a></h3>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">Blender 2.80 的 UI 经过了全新的设计，最为直观的感受当然是更加简洁，不过更重要的改进主要集中在让用户更方便地发现和使用其众多功能，让熟悉商业 3D 动画软件 Maya 和 3ds Max 的用户也能更快上手。</p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">例如针对快捷键的改进，随着 Blender 的功能不断扩展，新功能往往缺少对应的快捷键，这无疑会影响创作者的生产力。出于此原因，新版本更改了许多快捷键以快速访问常用功能，另外默认情况下会分配较少的快捷键，以便用户可以自己进行映射。目前提供了三套方案：</p>
<ul style="box-sizing: inherit; margin: 0px; padding: 0px 0px 0px 2.5em;">
<li style="box-sizing: inherit;">Blender：默认方案，专为在 Blender 中有效工作而设计（<a style="box-sizing: inherit; background-color: transparent; color: #4183c4; text-decoration-line: none;" href="https://developer.blender.org/T55194">修改后的快捷键列表</a>）</li>
<li style="box-sizing: inherit; margin-top: 0.25em;">Blender 2.7：与早期版本相比，对键盘映射的改动相对较少</li>
<li style="box-sizing: inherit; margin-top: 0.25em;">行业通用方案（Industry Compatible）：基于其他 3D 应用程序中典型快捷方式的键盘映射（<a style="box-sizing: inherit; background-color: transparent; color: #4183c4; text-decoration-line: none;" href="https://developer.blender.org/T54963">快捷方式概述</a>）</li>
</ul>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;"><img class="zoom-in-cursor" style="box-sizing: border-box; border: 0px; margin: auto; max-width: 80%; vertical-align: middle; cursor: zoom-in;" src="https://static.oschina.net/uploads/space/2019/0801/010539_z1ze_2720166.png" alt="" /></p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">其他方面的改进还包括<span style="box-sizing: inherit; font-weight: bold;">引入全新的暗黑模式主题</span>、<span style="box-sizing: inherit; font-weight: bold;">使用具有现代感的图标集</span>、<span style="box-sizing: inherit; font-weight: bold;">Quick Favorites 菜单能快速访问用户最常用的工具</span>、<span style="box-sizing: inherit; font-weight: bold;">默认使用左键点击选择</span>、<span style="box-sizing: inherit; font-weight: bold;">新建文件时可在多个模板中进行选择</span>（General、2D 动画、Sculpting、VFX 和视频）和引入弹出窗口（Popovers）等。</p>
<h3 style="box-sizing: inherit; font-family: 'PingFang SC', 'Helvetica Neue', 'Microsoft YaHei UI', 'Microsoft YaHei', 'Noto Sans CJK SC', Sathu, EucrosiaUPC, Arial, Helvetica, sans-serif; line-height: 1.28571em; margin: 1.2em 0px 0.8em; font-weight: 500; padding: 0px; font-size: 20px; border: none;"><a style="box-sizing: inherit; background-color: transparent; color: #4183c4; text-decoration-line: none;" href="https://www.blender.org/download/releases/2-80/#a-whole-new-workspace" target="_blank" rel="noopener"><span style="box-sizing: inherit; font-weight: bold;">全新的 Workspace</span></a></h3>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">新的 Workspace 也属于重新设计的 UI 的一部分，通过模板和 Workspace，我们可以快速开始使用雕刻、纹理绘制或运动跟踪等任务，也可以对它进行定制以创建自己的高效工作环境。</p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;"><img class="zoom-in-cursor" style="box-sizing: border-box; border: 0px; margin: auto; max-width: 80%; vertical-align: middle; cursor: zoom-in;" src="https://static.oschina.net/uploads/space/2019/0801/064006_KLNp_2720166.jpg" /></p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">▲ 雕刻（Sculpt）</p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;"><img class="zoom-in-cursor" style="box-sizing: border-box; border: 0px; margin: auto; max-width: 80%; vertical-align: middle; cursor: zoom-in;" src="https://static.oschina.net/uploads/space/2019/0801/064034_E5y2_2720166.jpg" /></p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">▲ 模型（Model）</p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;"><img class="zoom-in-cursor" style="box-sizing: border-box; border: 0px; margin: auto; max-width: 80%; vertical-align: middle; cursor: zoom-in;" src="https://static.oschina.net/uploads/space/2019/0801/064101_OW4w_2720166.jpg" /></p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">▲ 动画（Animate）</p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;"><img class="zoom-in-cursor" style="box-sizing: border-box; border: 0px; margin: auto; max-width: 80%; vertical-align: middle; cursor: zoom-in;" src="https://static.oschina.net/uploads/space/2019/0801/064111_oZEm_2720166.jpg" /></p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">▲ 自定义（Edit &amp; Grade）</p>
<h3 style="box-sizing: inherit; font-family: 'PingFang SC', 'Helvetica Neue', 'Microsoft YaHei UI', 'Microsoft YaHei', 'Noto Sans CJK SC', Sathu, EucrosiaUPC, Arial, Helvetica, sans-serif; line-height: 1.28571em; margin: 1.2em 0px 0.8em; font-weight: 500; padding: 0px; font-size: 20px; border: none;"><span style="box-sizing: inherit; font-weight: bold;"><a style="box-sizing: inherit; background-color: transparent; color: #4183c4; text-decoration-line: none;" href="https://www.blender.org/download/releases/2-80/#what-you-see-is-what-you-need" target="_blank" rel="noopener">所见即所需（What You See Is What You Need）</a></span></h3>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">3D Viewport 功能已完全被重写，借助全新的现代&nbsp;<a style="box-sizing: inherit; background-color: transparent; color: #4183c4; text-decoration-line: none;" href="https://wiki.blender.org/wiki/Reference/Release_Notes/2.80/Viewport" target="_blank" rel="noopener">3D Viewport</a>，我们将能够显示针对正在执行的任务而优化的场景。其中新的 Workbench 渲染引擎设计用于在 viewport 中完成工作，支持场景布局、建模和雕刻等任务。该引擎还具有叠加层功能（overlays），可以精确控制渲染顶部可见的实用程序。</p>
<div style="box-sizing: inherit;">
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">叠加层也可以在 Eevee 和 Cycles 渲染预览图之上工作，因此我们可以使用完整着色（full shading）来编辑和绘制场景。</p>
</div>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;"><img class="zoom-in-cursor" style="box-sizing: border-box; border: 0px; margin: auto; max-width: 80%; vertical-align: middle; cursor: zoom-in;" src="https://static.oschina.net/uploads/space/2019/0801/065519_iwci_2720166.png" /></p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">▲ 随机颜色</p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;"><img class="zoom-in-cursor" style="box-sizing: border-box; border: 0px; margin: auto; max-width: 80%; vertical-align: middle; cursor: zoom-in;" src="https://static.oschina.net/uploads/space/2019/0801/065538_Fbyk_2720166.jpg" /></p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">▲ 彩色线框</p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;"><img class="zoom-in-cursor" style="box-sizing: border-box; border: 0px; margin: auto; max-width: 80%; vertical-align: middle; cursor: zoom-in;" src="https://static.oschina.net/uploads/space/2019/0801/065550_SPJB_2720166.png" /></p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">▲ Look Dev</p>
<h3 style="box-sizing: inherit; font-family: 'PingFang SC', 'Helvetica Neue', 'Microsoft YaHei UI', 'Microsoft YaHei', 'Noto Sans CJK SC', Sathu, EucrosiaUPC, Arial, Helvetica, sans-serif; line-height: 1.28571em; margin: 1.2em 0px 0.8em; font-weight: 500; padding: 0px; font-size: 20px; border: none;"><a style="box-sizing: inherit; background-color: transparent; color: #4183c4; text-decoration-line: none;" href="https://wiki.blender.org/wiki/Reference/Release_Notes/2.80/EEVEE" target="_blank" rel="noopener"><span style="box-sizing: inherit; font-weight: bold;">实时渲染</span></a></h3>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">Eevee 是一个新的基于物理的实时渲染引擎。它既可以作为最终渲染输出（final frame），也可以作为视图的实时渲染引擎。它具有许多高级的功能，如光速滤镜、屏幕空间反射和折射、次表面散射，柔化和接触阴影(Contact Shadows)、景深，相机运动模糊和辉光等。</p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;"><img class="zoom-in-cursor" style="box-sizing: border-box; border: 0px; margin: auto; max-width: 80%; vertical-align: middle; cursor: zoom-in;" src="https://static.oschina.net/uploads/space/2019/0801/073810_pAG5_2720166.png" /></p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;"><img class="zoom-in-cursor" style="box-sizing: border-box; border: 0px; margin: auto; max-width: 80%; vertical-align: middle; cursor: zoom-in;" src="https://static.oschina.net/uploads/space/2019/0801/073858_MGT4_2720166.png" /></p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;"><img class="zoom-in-cursor" style="box-sizing: border-box; border: 0px; margin: auto; max-width: 80%; vertical-align: middle; cursor: zoom-in;" src="https://static.oschina.net/uploads/space/2019/0801/074006_6I6Y_2720166.png" /></p>
<h3 style="box-sizing: inherit; font-family: 'PingFang SC', 'Helvetica Neue', 'Microsoft YaHei UI', 'Microsoft YaHei', 'Noto Sans CJK SC', Sathu, EucrosiaUPC, Arial, Helvetica, sans-serif; line-height: 1.28571em; margin: 1.2em 0px 0.8em; font-weight: 500; padding: 0px; font-size: 20px; border: none;"><span style="box-sizing: inherit; font-weight: bold;"><a style="box-sizing: inherit; background-color: transparent; color: #4183c4; text-decoration-line: none;" href="https://code.blender.org/2017/12/drawing-2d-animation-in-blender-2-8/" target="_blank" rel="noopener">2D 绘画和动画系统 Grease Pencil</a></span></h3>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">Grease Pencil 是一个完整的 2D 绘图和动画系统。此 2D 工具在 3D 环境中的前所未有的集成让我们能够创建下一级概念艺术、故事板和动画。</p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">Grease Pencil 对象是 Blender 的原生部分，与现有的对象选择、编辑，管理和链接工具集成。笔划可以组织成图层，并用材质和纹理着色。除了笔画的绘制模式之外，这些对象也可以与网格类似地进行编辑、雕刻和重量绘制。</p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">修饰符可用于变形、生成和着色笔画。常用的网格修改器（如数组，细分和骨架变形）具有笔划的等效项，还可以使用渲染效果，如模糊、阴影或边缘照明（rim lighting）。</p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;">除了上面提到的更新内容，更多值得关注的新特性<a style="box-sizing: inherit; background-color: transparent; color: #4183c4; text-decoration-line: none;" href="https://www.blender.org/download/releases/2-80/" target="_blank" rel="noopener">请查看发布公告</a>。</p>
<p style="box-sizing: inherit; margin: 16px 0px 14px; line-height: 28px;"><img class="zoom-in-cursor" style="box-sizing: border-box; border: 0px; margin: auto; max-width: 80%; vertical-align: middle; cursor: zoom-in;" src="https://static.oschina.net/uploads/space/2019/0731/160715_mrnV_2720166.png" /></p>
<p>xxx <br> yyy <br></p>
</div>
</body>
</html>`
