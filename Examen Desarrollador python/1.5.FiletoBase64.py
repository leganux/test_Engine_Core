#en mi intento 1 intente abrir el archivo en modo lectura y posteriormente ejecutar la funcion base 64
import base64


def filetob64(path):
    file = open(path, 'r')
    return base64.b64encode(file)

#en mi intento 2 intente abrir el archivo en modo lectura pero ya con codificacion base64
def filetob64v2(path):
    file = open(path, 'r',1,'base64')
    return file


print(filetob64('./hola.txt'))
print(filetob64v2('./hola.txt'))
