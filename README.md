# صحت سنجی شماره تلفن های ایرانی با __رجکس__
همیشه صحت سنجی شماره تلفن ها برای ما برنامه نویسا یکم داستان داشته و خب چون بیشتر ما اصلا خودمون رو درگیر این چیزا نمی کنیم و به این فکر می کنیم که خب فوقش طرف شمارشو اشتباه میزنه دیگه و OTP سایت براش نمیره !!!
و همیشه اینجوری از زیر کار در رفتیم. ولی خب من خودم سر یه پروژه ای نیاز داشتم تا با جزئیات اطلاعات مربوط به هر شماره رو دربیارم. این رجکس ها فقط __فرمت شماره تلفن__ رو پیدا می کنن نه اینکه آیا این شماره واقعا وجود داره یا نه !  




## چرا رجکس ؟ 
«عبارت‌های منظم» (Regular Expressions) که اصطلاحاً regex یا regexp نامیده می‌شوند در زمان استخراج اطلاعات از هر متنی کاملاً مفید هستند. این عبارت‌ها برای جستجو و یافتن مطابقت یک یا چند الگوی جستجوی خاص مورد استفاده قرار می‌گیرند. بدین ترتیب می‌توان توالی خالصی از کاراکترهای ASCII یا یونیکد را یافت. زمینه‌های کاربرد regex از اعتبارسنجی تا تجزیه/جایگزینی رشته‌ها، ترجمه داده‌ها به قالب‌های دیگر و وب اسکرپینگ متفاوت است.  

## صحت سنجی با رجکس
توجه کنید که Match کردن با رجکس توی هر زبان متفاوته و باید داکیومنت های زبانی که دارین باهاش برنامه مینویسن رو بخونید ولی خب بطور عمده یه چیز و اینکه هر زبان برخی از قوانین رجکس رو کم و زیاد می کنه. استفاده درست از این ها مربوط میشه به زبانی که میخواید از اینا استفاده کنید. بین فایل ها، نمونه هایی از عملیات Regex Matching در زبان های برنامه نویسی مختلف قرار گرفته که میتونید استفاده کنید.


## نمونۀ فرمت های قابل تشخیص

این فقط یک مثال از فرمت قابل تشخیص است و شماره تلفن فقط یک مثال رندوم است

| تلفن های همراه | حالت کامل | حالت بهینه |
|---|---|---|
| 09120034965 | ✅ | ✅ |
| 0912 003 4965 | ✅ | 🚫 |
| 0912-003-4965 | ✅ | 🚫 |
| 9120034965 | ✅ | ✅ |
| 912 003 4965 | ✅ | 🚫 |
| 912-003-4965 | ✅ | 🚫 |
| +989120034965 | ✅ | ✅ |
| +98912 003 4965 | ✅ | 🚫 |
| +98912-003-4965 | ✅ | 🚫 |
| 989120034965 | ✅ | ✅ |
| 98912 003 4965 | ✅ | 🚫 |
| 98912-003-4965 | ✅ | 🚫 |

تمام پیش شماره های قابل تشخیص رو میتونید [اینجا](https://github.com/AmirMahdyJebreily/iranian-phonenumber-validation/blob/main/ValidPreNumbers.md) ببینید.

## رجکس های بدون اوپراتور
این رجکس ها بر اساس اوپراتور جدا نشده اند و فقط ایرانی بودن شماره را تشخیص می دهند.
#### حالت کامل رجکس های بدون اوپراتور (از جدا کننده پشتیبانی می کند ✅)
```regex
/((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g
```
#### حالت بهینه رجکس های بدون اوپراتور (از جدا کننده پشتیبانی نمی کند 🚫) 
این رجکس سبک ترین رجکس و کارآمد ترین رجکسیه که میتونید انتخاب کنید. اگر ولیدیشنتون رو سمت client انجام میدید این رجکس رو پیشنهاد می کنم !  
اما حواستون باشه این رجکس فقط فرمت کلی شماره های ایرانی رو تشخیص میده

```regex
/((0?9)|(\+?989))\d{9}/g
```

## اوپراتور های کشوری
این رجکس ها بر اساس اوپراتور های همراه ایرانی ساخته شده اند. یعنی اگر کاربر شما پیش شماره ای وارد کرد که هیچ اوپراتور ایرانی آن را ثبت نکرده بود، این رجکس ها می توانند تشخیص دهند.

> توجه: درصورتی که میخواهید رجکس خود را شخصی سازی کنید، [این صفحه](https://amirmahdyjebreily.github.io/iranian-phonenumber-validation/) را ببینید

### تمام شماره های کشور
#### حالت کامل تمام شماره های کشور (از جدا کننده پشتیبانی می کند ✅)
این رجکس، ترکیب تمامی رجکس های داحل این فایل است. میشه بهش گفت آش رشته. یکم سنگینه و خب خیلی پیشنهادش نمیکنم برای پروژه های سبک تر. این رجکس از یک separator یا جدا کننده بین بخش های شماره تلفن هم پشتیبانی میکه. به این صورت 0000-000-0900 
```regex
/((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\W?\d{3}\W?\d{4}/g
```
#### حالت بهینه تمام شماره های کشور (از جدا کننده پشتیبانی نمی کند 🚫)
ااین حالت از هیچ جدا کننده ای پشتیبانی نمیکنه !
```regex
/((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\d{7}/g
```
---
### شماره های همراه اول
#### حالت کامل همراه اول (از جدا کننده پشتیبانی می کند ✅)
```regex
/((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96))\W?\d{3}\W?\d{4}/g
```  
#### حالت بهینه همراه اول (از جدا کننده پشتیبانی نمی کند 🚫)

```regex
/((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96))\d{7}/g
```  
---
### شماره های ایرانسل
#### حالت کامل ایرانسل (از جدا کننده پشتیبانی می کند ✅)

```regex
/((0?9)|(\+?989))((32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41))\W?\d{3}\W?\d{4}/g
``` 
#### حالت بهینه ایرانسل (از جدا کننده پشتیبانی نمی کند 🚫)

```regex
/((0?9)|(\+?989))((32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41))\d{7}/g
``` 
---
### شماره های رایتل
#### حالت کامل رایتل (از جدا کننده پشتیبانی می کند ✅)

```regex
/((0?9)|(\+?989))((20)|(21)|(22)|(23))\W?\d{3}\W?\d{4}/g
```
#### حالت بهینه رایتل (از جدا کننده پشتیبانی نمی کند 🚫)

```regex
/((0?9)|(\+?989))((20)|(21)|(22)|(23))\d{7}/g
```
---
## اوپراتور های کوچک یا منطقه ای

### تله کیش (TeleKish)
#### حالت کامل تله کیش (از جدا کننده پشتیبانی می کند ✅)

```regex
/((0?9)|(\+?989))(34)\W?\d{3}\W?\d{4}/g
```
#### حالت بهینه تله کیش (از جدا کننده پشتیبانی نمی کند 🚫)

```regex
/((0?9)|(\+?989))(34)\d{7}/g
```
---
### شماره های تالیا
#### حالت کامل تالیا (از جدا کننده پشتیبانی می کند ✅)

```regex
/((0?9)|(\+?989))(32)\W?\d{3}\W?\d{4}/g
```  
#### حالت بهینه تالیا (از جدا کننده پشتیبانی نمی کند 🚫)
```regex
/((0?9)|(\+?989))(32)\d{7}/g
```


## اپراتورهای مجازی تلفن همراه

### آپتل (Aptel)
#### حالت کامل آپتل (از جدا کننده پشتیبانی می کند ✅)

```regex
/((0?9)|(\+?989))((9910)|(9911)|(9913)|(9914))\W?\d{3}\W?\d{4}/g
```
#### حالت بهینه آپتل (از جدا کننده پشتیبانی نمی کند 🚫)
 ```regex
/((0?9)|(\+?989))((9910)|(9911)|(9913)|(9914))\d{7}/g
```
---

### سامانتل (SamanTel)
#### حالت کامل سامانتل (از جدا کننده پشتیبانی می کند ✅)

```regex
/((0?9)|(\+?989))((9999)|(999))\W?\d{3}\W?\d{4}/g
```
#### حالت بهینه سامانتل (از جدا کننده پشتیبانی نمی کند 🚫)
```regex
/((0?9)|(\+?989))((9999)|(999))\d{7}/g
```
---

### شاتل موبایل Shatel Mobile
#### حالت کامل شاتل موبایل (از جدا کننده پشتیبانی می کند ✅)

```regex
/((0?9)|(\+?989))((9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817))\W?\d{3}\W?\d{4}/g
```
#### حالت بهینه شاتل موبایل (از جدا کننده پشتیبانی نمی کند 🚫)

```regex
/((0?9)|(\+?989))((9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817))\d{7}/g
```

---
### منابع  
* ویکی پدیا - [مقاله شماره تلفن های ایران](https://fa.wikipedia.org/wiki/%D8%B4%D9%85%D8%A7%D8%B1%D9%87%E2%80%8C%D9%87%D8%A7%DB%8C_%D8%AA%D9%84%D9%81%D9%86_%D8%AF%D8%B1_%D8%A7%DB%8C%D8%B1%D8%A7%D9%86)
