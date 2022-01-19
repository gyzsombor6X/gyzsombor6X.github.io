class konyv:
    def __init__(self, cim, hossz, ar):
        self.cim = cim
        self.hossz = hossz   
        self.ar = ar
p1 = konyv("Gyűrűk ura 1",400,4000)
print(p1.cim,p1.hossz,p1.ar)
print("Add meg egy könyv adatait pontosvesszővel elválasztva: ",end="")
input("***A program csak idáig fut***")
p2 = konyv()
p2.cim=input()
p2.hossz=input()
p2.ar=input()
print(p2.cim,p2.hossz,p2.ar)
print("A könyv adatai: ")
print("A könyv terjedelme: ")
print("Adj meg egy számot: ",end="")
# FOR ciklus helye
print("Add meg egy könyv adatait pontosvesszővel elválasztva: ",end="")


print("Hosszú terjedelmű könyvek címe: ")