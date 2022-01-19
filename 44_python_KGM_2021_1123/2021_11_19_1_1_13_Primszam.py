import math
print("Adj meg egy számot, és a program megmondja, hogy a szám prímszám-e vagy összetett!")
szam = 0
while (szam<2 or szam>1000000000):
    print("A rendszer csak számot fogad el!\nA szám 2 és 1.000.000.000 közötti érték legyen!\nMegadott szám: ",end="")
    try:
        szam=int(input())
    except:
        print("\nERROR")
        print("Érvénytelen adat!")
        print("Valószínűleg betűt adtál meg!")

if (szam > 1):
    for i in range (2,szam):
        if (szam%i==0):
            print("A megadott szám összetett.")
            break
        else:
            print("A megadott szám prímszám")
            break
input()