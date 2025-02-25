import random
import math

sum_squared = 0.0


for _ in range(1000):
 num = random.randint(0, 100)

if num % 2 == 0 and num % 5 == 0:
    sum_squared += math.sqrt(num)


print(sum_squared)









d = ['donkey', 'dingo', 'dragon']

def capitalize(s):
   return s[0].upper() + s[1:] if s else s


result = list(map(capitalize , d))


print(result)

















import random


numbers = [(random.randint(0, 100) for _ in range(0, 100)]

evens = []
odd = set()


for num in numbers:
   if num % 2 == 0:
      evens.append (num)
else: odd.add(num)

evens_tuple = tuple(evens)
           

print(tuple(evens))
print(odd)