# Validador de Cartão de Crédito - SP010 Laboratória

Este foi o primeiro projeto proposto no Bootcamp da laboratória e tem como objetivos:

- Trabalhar com base em um boilerplate, a estrutura básica de um projeto em diferentes
  pastas (através de módulos em JS).
- Conhecer as ferramentas de manutenção e melhoria do código (linters e testes
  unitários).
- Aprender sobre objetos, estruturas, métodos e iteração (loops) em JavaScript
- Implementar controle de versão com git (e a plataforma github)

---

## Sobre o projeto

Desenvolvi uma interface para que o usuário possa verificar se o número do cartão de crédito em questão é válido e para isso foi utilizado o _algoritmo de Luhn_.

Para este projeto a linha de raciocínio que segui foi a de começar pelo básico e ser objetiva, focando mais na funcionalidadedo do código.

Inseri uma função que não permite que o usuário digite outros caracteres além de números.

## Sobre o Algoritmo de Luhn

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

##Como usar o site

Para que a função seja ativada é necessário que insira um número de cartão (contendo 16 dígitos - quantidade de caracteres permitidos no input) e clique no botão verificar, aparecerá um pop-up informando se o número digitado é válido ou não como cartão de crédito. Caso o usuário clique no botão antes de digitar o número, aparecerá um pop-up pedindo-lhe que digite um número de cartão.

## Teste

Abaixo segue números de cartões para que possa utilizar e testar o site:

- 4916967337683945
- 2221003909489125
- 5038398054241867

## Tecnologias utilizadas

<div>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" / width="40" height="40">  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" / width="40" height="40">  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" / width="40" height="40">  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" /width="40" height="40">  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" / width="40" height="40">  
</div>

## Contato

<div>
<a href = "mailto:camilaverso2@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/camilanpgoncalves" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</div>
