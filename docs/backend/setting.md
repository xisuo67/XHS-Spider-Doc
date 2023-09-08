# 系统设置

> 此篇主要用于详细讲述XHS.Spider系统设置中比较重要的几个参数

<img  height="800px" width="800px" src="/images/setting.png"/>

### 下载路径

>指定下载路径后，系统将根据程序配置的下载路径，自动下载到该目录

### 下载文案

>开启该参数后，解析笔记时，将自动采集笔记文案，根据标题自动生成到对应的下载文件夹下,如果你仅需采集文案，建议开启该参数，仅解析笔记，无需下载

<img  height="800px" width="800px" src="/images/document.png"/>


### 自动登录

> 开启该参数后，扫码登陆后，将记录用户信息，下次启动程序时，若cookie未过期，则无需重复扫码登录动作

### 自动更新

<img  height="800px" width="800px" src="/images/autoupdate1.png"/>
<img  height="800px" width="800px" src="/images/autoupdate2.png"/>

> **注意：程序根目录命名为XHS-Spider,否则导致自动更新程序将在相同目录下更新至XHS-Spider文件夹**

> 开启自动更新参数，程序启动时，将检测版本号是否低于github发布最新版本号，若低于github发布版本号，程序将自动弹出更新提示，更新成功后，程序将自动重启。

### 下载完成提示

> 由于近期用户反馈下载提示过于频繁，开启该参数后，将不再弹出下载成功提示。作为补偿机制，增加查询下载进度，点击按钮可查询剩余下载项

<img  height="800px" width="800px" src="/images/downquery.png"/>

