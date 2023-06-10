# Aqui empiezo creando la clase que define el objeto
class Concatenar:
    # Aqui defino los atributos de miclase
    arreglo = []
    string = ''

    # La primera operación muestra la cadena ya concatenada
    def mostrar(self):
        print(self.string)

    # Con este metodo asigno a mi objeto el arreglo y realizo el join
    def concat(self, arr):
        self.arreglo = arr
        self.string = self.string.join(self.arreglo)


concat = Concatenar()
concat.concat(["a", "b", "c"])
concat.mostrar()
