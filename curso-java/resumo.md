## Install java

### Passo a passo

1 - Abrir um terminal (CTRL + ALT + T)

2 - Digitar o seguinte comando 

`sudo add-apt-repository ppa:linuxuprising/java`

Aceitar os termos, apertando ENTER

3 - Atualizar o gerenciador de pacotes

`sudo apt-get update`

4 - Instalar o Java 17

`sudo apt-get install oracle-java17-installer --install-recommends`

5 - Pra ter certeza se o Java está instalado, digite `java -version`

## Install Maven no Linux

1-  Atualize os pacotes

`sudo apt-get update`

2 - Instale o maven com o seguinte comando

`sudo apt-get -y install maven`

O maven deverá ser instalado em um dos seguintes caminhos **/usr/share/maven**
 ou **/etc/maven**
.

Para verificar se o maven foi instalado com sucesso, acessar o terminar e digitar

`mvn -version`

Isso irá mostrar a versão do maven instalada.

## Install Insomnia
### Add to sources
echo "deb [trusted=yes arch=amd64] https://download.konghq.com/insomnia-ubuntu/ default all" \
    | sudo tee -a /etc/apt/sources.list.d/insomnia.list

### Refresh repository sources and install Insomnia
sudo apt-get update
sudo apt-get install insomnia