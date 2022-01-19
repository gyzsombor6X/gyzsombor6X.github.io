f = open("ub2017egyeni.txt", "r")
elsosor=f.readline()
db=0
tavminimum=99999
osszeg=0
db1=0
versenyzo_min=""
for sor in f:
    print(sor)
    kecske=sor.split(";")
    versenyzo=kecske[0]
    rajtszam=int(kecske[1])
    kategoria=kecske[2]
    versenyido=kecske[3]
    tavszazalek=int(kecske[4])
    osszeg+=tavszazalek
    db1+=1
    atlag=osszeg/db1
    if kategoria=="Noi":
        db+=1
    if tavszazalek<tavminimum:
        tavminimum=tavszazalek
        versenyzo_min=versenyzo
print(db,"nő található")
print("Legrosszabb távszázalék:",tavminimum,"\b%, az eredményt",versenyzo_min,"érte el.")
print("Távszázalékok összege:",osszeg,"\b%")
print("Versenyzők száma:",db1,)
print("Átlagos távszázalék:",round(atlag, 2),"\b%")
input()
"""
for i in range(999):
    print()
"""