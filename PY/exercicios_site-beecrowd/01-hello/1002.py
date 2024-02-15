def obter_numero():
    return float(input())
def main():
    raio = obter_numero()
    pi = 3.14159
    area = pi * raio ** 2
    print("A={:.4f}".format(area))
main()
