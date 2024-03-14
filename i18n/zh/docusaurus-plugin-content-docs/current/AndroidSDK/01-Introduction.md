import Link from '@docusaurus/Link';

# Introduction

HaoJin is a mobile phone software that provides aggregate collection services for merchants. This document describes the interface calls that HaoJin is open to, and third-party applications can implements the collection function through these interfaces.
HaoJin supports below third-party functions:

<br/>
1. Collection, Refund, Query Multiple Transaction Records, Query Transaction Details.
<br/>
2. View Transaction Summary, Query Transaction Channel Configuration.
<br/>
3. Sale/Void/Query/Adjust Endpoints for card.

<Link href="/img/android/architecture__diagram.png" target="_blank"> ![Introduction](/img/android/architecture__diagram.png)</Link>

## How to use

### Add Permissions

Add the following code to the AndroidManifest.xml file.
Note: In order to ensure that you can get permission, please install the haojin
application first.

<Link href="/img/android/add__permission.png" target="_blank"> ![Add Permissions](/img/android/add__permission.png)</Link>

### Add Jar Package Dependency

Integrated the qfpay_haojin_api_xxx.jar file in the third party application.

<Link href="/img/android/package__dependency.png" target="_blank"> ![Add Jar Package Dependency](/img/android/package__dependency.png)</Link>

### Config Target Application Id

<Link href="/img/android/config__appid.png" target="_blank"> ![Config Target Application Id](/img/android/config__appid.png)</Link>

### Add Proguard Rule

Add follow code to the proguard-rules.pro file.

<Link href="/img/android/proguard__rule.png" target="_blank"> ![Add Proguard Rule](/img/android/proguard__rule.png)</Link>
