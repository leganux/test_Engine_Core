tabla = [
    [".", ".", ".", "1", "4", ".", ".", "2", "."],
    [".", ".", "6", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "1", ".", ".", ".", ".", ".", "."],
    [".", "6", "7", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "8", "1", "."],
    [".", "3", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", "7", "."]
]


def validateSudoku(tabla):
    # declaro la variable de respuesta
    response = True

    # Primero pinte el sudoku en una forma mas amigable
    for i in range(9):
        row = ''
        for j in range(9):
            row = row + ('[' + tabla[i][j] + ']')
        print(row)

    # verifique primero cada row
    for i in range(9):
        # cree un diccionario para contabilizar las veces que aparece en fila un valor
        dicc = {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0}
        for j in range(9):
            valor = tabla[i][j]
            if (valor != '.'):
                dicc[valor] = dicc[valor] + 1
        # Imprimo el conteo de cada valor
        # print(dicc)
        # verifico si un valor es mayor a 1, y si lo es deja de funcionar y cuplir
        for x in dicc:
            if (dicc[x] > 1):
                response = False

        # verifique primero cada col
        for i in range(9):
            # cree un diccionario para contabilizar las veces que aparece en fila un valor
            dicc = {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0}
            for j in range(9):
                valor = tabla[j][i]
                if (valor != '.'):
                    dicc[valor] = dicc[valor] + 1
            # Imprimo el conteo de cada valor
            # print(dicc)
            # verifico si un valor es mayor a 1, y si lo es deja de funcionar y cuplir
            for x in dicc:
                if (dicc[x] > 1):
                    response = False

    return response


print(validateSudoku(tabla))
