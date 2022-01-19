print("Adj meg 2 számot szóközökkel, ha lehet az első szám legyen nagyobb!\nFormátum: szám1 szám2\nA megadott számok: ",end="")
szam=input()
kecske=szam.split()
szam1=int(kecske[0])
szam2=int(kecske[1])
for i in range(szam1,szam2,-1):
    if (i%2==0):
        print(i,end=" ")
input()