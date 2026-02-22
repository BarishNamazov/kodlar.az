---
title: "Python və 'Decorator'lar"
author: nicat-xalid
date: 2026-02-20
categories: [Proqram Dilləri, Python]
---

"Decorator"lar bir çox Python kitabxanası və çərçivələrində (framework) istifadə olunan özəllikdir. Tərcümədə "örtük" deməkdir. Hər hansı metodu istifadə etməzdən qabaq görüləcək işləri özündə ehtiva edir. Məsələn Django çərçivəsində hansısa spesifik bir URL-də istifadəçinin öz hesabına daxil olub-olmadığını yoxlayırıq.
Gəlin birlikdə öyrənək.

```python
@login_required
def account_view(request):
    return HttpResponse('Çox gizli səhifə ;)')
```

`account_view` funksiyasının üzərinə yazılan decorator (bundan sonra _örtük_) ora sorğu göndərməzdən qabaq, hesaba daxil olub-olmadığını yoxayır. Əgər daxil olubsa cavab qaytarır, yoxsa login səhifəsinə yönləndirir.
Bəs bunun işləmə prinsipi nədir? Necə olur ki, həmən funksiya çağırılmamışdan qabaq `login_required` işə düşür?
Əslində işləmə prinsipi çox sadədir. İşin sehri sadəcə "**syntactic sugar**"dadır (bundan sonra _sintaktik şəkər_).

## İlk addımlar

Fərz edək ki, bir ədədi digərinə bölən funksiyamız var:

```python
def divider(num1, num2):
    return num1/num2
 
divider(5, 2)
divider(5, 0)
```

İkinci çağrılmada 5 və 0 ötürdük və 0-a bölmə olmadığından Python bizə `ZeroDivisionError` qaytardı.
Örtük vasitəsi ilə biz çıxa biləcək xətaları əvvəlcədən idarə edə bilərik. İlk öncə sadə bir misala baxaq:

```python
def my_decorator(func):
   def wrapper():
       print("Funksiyadan qabaq işləyəcək.")
       # parametr kimi ötürdüyümüz funksiya
       func()
       print("Funksiyadan sonra işləyəcək.")
 
   return wrapper
 
def divide():
   print("divide funksiyası")
 
foo = my_decorator(divide)
foo()
```

Bu kod bizə belə bir nəticə qaytaracaq:

```
Funksiyadan qabaq işləyəcək.
divide funksiyası
Funksiyadan sonra işləyəcək.
```

Burada biz `my_decorator` adında bir funksiya yartdıq. Hansı ki, içində `wrapper` adında **inner** (daxili) funksiya var. Əlavə olaraq, bir də `divide` funksiyası yaratdıq. Daha sonra **foo** adında bir dəyişən yaradıb, `divide()` funksiyasını parametr kimi ötürdüyümüz `my_decorator` funksiyasına mənimsətdik. `foo()` funksiyasını çağıranda ilk öncə `my_decorator` işə düşür, ardınca içindəki `wrapper()`, ən sonda isə `divide()`.\
Göründüyü kimi çox sadə məntiqlə – bir funksiyanı digərinə ötürməklə istənilən funksiyadan qabaq hər hansısa bir əməliyyat etmək mümkündür

## Örtüklər və arqumentlər

Əgər bizim örtük ilə istifadə edəcəyimiz funksiyamız (divide) parametr qəbul edəcəksə, o zaman belə bir xəta ilə qarşılaşa bilərik:

```python
def my_decorator(func):
   def wrapper():
       print("Funksiyadan qabaq işləyəcək.")
       func()
       print("Funksiyadan sonra işləyəcək.")
   return wrapper
 
def divide(num1, num2):
   print(num1/num2)
 
foo = my_decorator(divide)
foo(5, 2)
```

```
Traceback (most recent call last):
  File "main.py", line 12, in 
    foo(5, 2)
TypeError: wrapper() takes 0 positional arguments but 2 were given
```

Bu xətanı biz ona görə aldıq ki, 4-cü sətrdə çağrılan `func()` metoduna heç bir arqument verməmişik. Halbuki `divide()` bizdən _num1_ və _num2_ dəyərlərini gözləyir.\
Örtüklərdə daxili funksiyamız olan `wrapper()` əsas funksiyamızın (`divider()`) parametrlərini qəbul edə bilir. Biz də bunu `func()`-a ötürə bilərik:

```python
def my_decorator(func):
   def wrapper(num1, num2):
       print("Funksiyadan qabaq işləyəcək.")
       func(num1, num2)
       print("Funksiyadan sonra işləyəcək.")
   return wrapper
 
def divide(num1, num2):
   print(num1/num2)
 
foo = my_decorator(divide)
foo(5, 2)
```

Bununla da xəta aradan qalxmış olur.\
Əgər funksiya bizdəki kimi 2 yox daha çox parametr qəbul etsə hər dəfə bunları yazmaq o qədər də ağlabatan deyil. Üstəlik hər funksiya üçün eyni işi görən ayrı-ayrı örtüklərlər yazmalı olacağıq. Bunun həll yolu [***args** və ****kwargs** ikilisidir](https://realpython.com/python-kwargs-and-args/).\
*args funksiyaya ötürülən istənilən positional (mövqeli) arqumentləri, **kwargs isə keyword (açar sözlü) arqumentləri qəbul edir.

```python
def my_decorator(func):
  def wrapper(*args, **kwargs):
      print("Funksiyadan qabaq işləyəcək.")
      func(*args, **kwargs)
      print("Funksiyadan sonra işləyəcək.")
  return wrapper
 
def divide(num1, num2):
  print(num1/num2)
 
foo = my_decorator(divide)
foo(5, 2)
```

## Sintaktik şəkər

Örtüyü

```python
foo = my_decorator(divide)
```

kimi yazmaq əvəzinə,

```python
def my_decorator(func):
  def wrapper(*args, **kwargs):
      print("Funksiyadan qabaq işləyəcək.")
      func(*args, **kwargs)
      print("Funksiyadan sonra işləyəcək.")
  return wrapper
 
@my_decorator
def divide(num1, num2):
  print(num1/num2)
 
divide(5, 2)
```

kimi yaza bilərik.\
Bir neçə örtüyü bir funksiyanın üzərinə də yazmaq mümkündür:

```python
@my_decorator1
@my_decorator2
@my_decorator3
def divide(num1, num2):
  print(num1/num2)
```

## @wraps decorator

"Python"da `__name__`, `__doc__` və s. kimi daxili magic (_sehrli_) dəyişənlər var. Məsələn `__name__` bizə funksiyanın adını verir:

```python
print(print.__name__)
```

**print** funksiyasının adını qaytarır.\
Bu məntiqlə biz
```python
print(divide.__name__)
```

kodunu icra etsək divide qaytarmalı idi, amma "wrapper" qaytardı. Çünki, biz `divide`-ı `my_docator`-a mənimsətmişik. O da bizə `wrapper()` metodunu qaytarır. Problemi həll etmək üçün Python-un `@wraps` örtüyündən istifadə edəcəyik.

```python
from functools import wraps
 
def my_decorator(func):
  @wraps(func)
  def wrapper(*args, **kwargs):
      print("Funksiyadan qabaq işləyəcək.")
      func(*args, **kwargs)
      print("Funksiyadan sonra işləyəcək.")
  return wrapper
 
@my_decorator
def divide(num1, num2):
  print(num1/num2)
 
print(divide.__name__)
```

Daxili funksiya olan `wrapper()` funksiyasının üstünə `@wraps` örtüyünü yazıb, parametr kimi də _func_ dəyərini verdikdən sonra `divide.__name__` bizə konsolda "divide" qaytaracaq.\
Və, yekunda məsələnin həllinə gələk:

```python
from functools import wraps
 
def my_decorator(func):
  @wraps(func)
  def wrapper(num1, num2):
      if num2 == 0:
          print("You can not divide by zero.")
      else:
          func(num1, num2)
  return wrapper
 
@my_decorator
def divide(num1, num2):
  print(num1/num2)
 
divide(5, 0)
divide(5, 2)
```

Nəticə:

```
You can not divide by zero.
2.5
```
