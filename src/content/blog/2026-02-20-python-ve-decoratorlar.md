---
author: nicat-xalid
categories:
  - Proqram Dilləri
  - Python
date: 2026-02-20
description:
  Python proqramlaşdırma dilində "decorator"lar nədir və onlardan necə istifadə
  edilir?
title: Python və 'Decorator'lar
---

[[Örtük]]lər bir çox Python kitabxanası və çərçivələrində istifadə olunan
özəllikdir. Hər hansı metodu istifadə etməzdən qabaq görüləcək işləri özündə
ehtiva edir.

**Nümunə:** Məsələn, Django çərçivəsində hansısa spesifik bir URL-də
istifadəçinin öz hesabına daxil olub-olmadığını yoxlayırıq. Gəlin birlikdə
öyrənək.

```python
@login_required
def account_view(request):
    return HttpResponse('Çox gizli səhifə ;)')
```

`account_view` funksiyasının üzərinə yazılan örtük ora sorğu göndərməzdən qabaq
hesaba daxil olub-olmadığını yoxlayır. Əgər daxil olubsa, cavab qaytarır, yoxsa
login səhifəsinə yönləndirir.

Bəs bunun işləmə prinsipi nədir? Necə olur ki, həmin funksiya çağırılmamışdan
qabaq `login_required` işə düşür? Əslində işləmə prinsipi çox sadədir. İşin
sehri sadəcə [[sintaktik şəkər]]dədir.

## İlk addımlar

Fərz edək ki, bir ədədi digərinə bölən funksiyamız var:

```python
def divider(num1, num2):
    return num1 / num2

divider(5, 2)
divider(5, 0)
```

İkinci çağırılmada 5 və 0 ötürdük və 0-a bölmə olmadığından Python bizə
`ZeroDivisionError` qaytardı. Örtük vasitəsilə biz çıxa biləcək xətaları
əvvəlcədən idarə edə bilərik.

İlk öncə sadə bir misala baxaq:

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

Burada biz `my_decorator` adında bir funksiya yaratdıq. Onun içində `wrapper`
adında daxili (inner) funksiya var. Əlavə olaraq `divide` funksiyası yaratdıq.

Daha sonra `foo` adında bir dəyişən yaradıb `divide()` funksiyasını parametr
kimi ötürdüyümüz `my_decorator` funksiyasına mənimsətdik.

`foo()` funksiyasını çağıranda:

- İlk öncə `my_decorator` işə düşür.
- Ardınca içindəki `wrapper()` işləyir.
- Ən sonda isə parametr kimi ötürülən `divide()` işə düşür.

Göründüyü kimi, çox sadə məntiqlə -- bir funksiyanı digərinə ötürməklə --
istənilən funksiyadan qabaq hər hansısa bir əməliyyat etmək mümkündür.

## Örtüklər və arqumentlər

Əgər bizim örtük ilə istifadə edəcəyimiz funksiyamız (`divide`) parametr qəbul
edəcəksə, o zaman belə bir xəta ilə qarşılaşa bilərik:

```python
def my_decorator(func):
    def wrapper():
        print("Funksiyadan qabaq işləyəcək.")
        func()
        print("Funksiyadan sonra işləyəcək.")
    return wrapper

def divide(num1, num2):
    print(num1 / num2)

foo = my_decorator(divide)
foo(5, 2)
```

**Nəticə:**

```
Traceback (most recent call last):
  File "main.py", line 12, in <module>
    foo(5, 2)
TypeError: wrapper() takes 0 positional arguments but 2 were given

```

Bu xətanı biz ona görə aldıq ki, daxili `wrapper` içində çağırılan `func()`
metoduna heç bir arqument verməmişik. Halbuki `divide()` bizdən `num1` və `num2`
dəyərlərini gözləyir.

Örtüklərdə daxili funksiyamız olan `wrapper()`, əsas funksiyamızın (`divide()`)
parametrlərini qəbul edə bilir. Biz də bunu `func()`-a ötürə bilərik:

```python
def my_decorator(func):
    def wrapper(num1, num2):
        print("Funksiyadan qabaq işləyəcək.")
        func(num1, num2)
        print("Funksiyadan sonra işləyəcək.")
    return wrapper

def divide(num1, num2):
    print(num1 / num2)

foo = my_decorator(divide)
foo(5, 2)
```

Bununla da xəta aradan qalxmış olur.

Əgər funksiya 2 yox, daha çox parametr qəbul etsə, hər dəfə bunları yazmaq o
qədər də ağlabatan deyil. Üstəlik, hər funksiya üçün eyni işi görən ayrı-ayrı
örtüklər yazmalı olacağıq.

Bunun həll yolu `*args` və `**kwargs` ikilisidir.

- `*args` -- funksiyaya ötürülən istənilən mövqeli (positiona) arqumentləri
  qəbul edir.
- `**kwargs` -- istənilən açar sözlü (keyword) arqumentləri qəbul edir.

> Bu ikili haqqında daha ətraflı məlumat almaq üçün
> [bu məqaləyə](https://realpython.com/python-kwargs-and-args/) baxa bilərsiniz.

```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Funksiyadan qabaq işləyəcək.")
        func(*args, **kwargs)
        print("Funksiyadan sonra işləyəcək.")
    return wrapper

def divide(num1, num2):
    print(num1 / num2)

foo = my_decorator(divide)
foo(5, 2)
```

## Sintaktik şəkər

Örtüyü

```python
foo = my_decorator(divide)
```

kimi istifadə etmək əvəzinə, daha qısa və oxunaqlı bir sintaksis var.
Funksiyanın adının önünə `@` işarəsi qoyaraq istifadə edə bilərik:

```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Funksiyadan qabaq işləyəcək.")
        func(*args, **kwargs)
        print("Funksiyadan sonra işləyəcək.")
    return wrapper

@my_decorator
def divide(num1, num2):
    print(num1 / num2)

divide(5, 2)
```

Hətta bir neçə örtüyü bir funksiyanın üzərinə zəncirvari (chaining) şəkildə də
yazmaq mümkündür:

```python
@my_decorator1
@my_decorator2
@my_decorator3
def divide(num1, num2):
    print(num1 / num2)
```

## @wraps örtüyü

Python-da `__name__`, `__doc__` və s. kimi daxili sehrli (magic) dəyişənlər var.
Məsələn:

```python
print(print.__name__)  # "print" qaytarır
```

Bu məntiqlə biz aşağıdakı kodu icra etsək, bizə `"divide"` qaytarmalı idi, amma
`"wrapper"` qaytardı:

```python
print(divide.__name__)
```

Səbəb odur ki, biz `divide`-ı `my_decorator`-a mənimsətmişik. O da bizə
daxilindəki `wrapper()` metodunu qaytarır.

Bu problemi həll etmək və əsas funksiyanın kimliyini (meta məlumatlarını)
qorumaq üçün Python-un `functools` [[kitabxana]]sındakı `@wraps` örtüyündən
istifadə edəcəyik:

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
    print(num1 / num2)

print(divide.__name__)
```

Daxili funksiya olan `wrapper()` funksiyasının üstünə `@wraps` örtüyünü yazıb,
parametr kimi də `func` dəyərini verdikdən sonra `divide.__name__` artıq doğru
şəkildə `"divide"` qaytaracaq.

## Yekun həll

İndi isə ən başdakı sıfıra bölmə (`ZeroDivisionError`) məsələsinin yekun həllinə
baxaq:

```python
from functools import wraps

def my_decorator(func):
    @wraps(func)
    def wrapper(num1, num2):
        if num2 == 0:
            print("Sıfıra bölmək olmaz!")
        else:
            func(num1, num2)
    return wrapper

@my_decorator
def divide(num1, num2):
    print(num1 / num2)

divide(5, 0)
divide(5, 2)
```

**Nəticə:**

```
Sıfıra bölmək olmaz!
2.5

```
