# CONTRIBUTING

## Questions
Se tiver duvida for relacionada a um problema de sintaxe ou implementação no seu próprio código, consulte a documentação da tecnologia a qual está tendo problemas ou faça uma busca em search engines como google e duckduck go.

## Issue Labeling/Types
| Issue Types | Descrição |
| ------|-------------|
| focs | Indica desenvolvimento de documentação |
| geature | Indica desenvolvimento de features |
| ci | Indica desenvolvimento de configurações de ambiente |
| chore | Indica desenvolvimento de tarefas automatizadas |
| refactor | Indica que alguma feature esta sendo reemplementada |
| remove | Indica que uma feature ou funcionalidade foi removida |
| bugfix | Indica que um problema(bug/fix) foi resolvido |
| wontfix | Indica que issue ou pull request deixara de ser trabalhada |
| task | indica tarefas genericas de planejamento ou processos de desenvolvimento que não se enquadram nas outras Issues. |

## Passo a Passo para contribuir

### Pre Requirements
Siga o [README.md](./README.md) para instalação default e prerequisitos do ambiente de desenvolvimento.

### Workflow
Bom se está pronto para dar inicio, saiba que este projeto deve seguir o fluxo estabelecido no [gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), então sua feature deve seguir o fluxo, novas branchs do tipo feature, devem ter o titulo da sua task.

### Padrão de mensagem dos commits
Quando for fazer seu commit deve utilizar o padrão definido na dependencia de desenvolviment [commitizen](https://github.com/commitizen/cz-cli), ou deve ser utilizada a propria ferramenta, desta forma seus commits serão aplicados de forma correta e as mensagens serão utilizadas para atualizar o changelog.

## codeformat
Code format Javascript está utilizando eslint para checagem de códigos em arquivos de extensão .js e .jsx, com base nas regras estipuladas no arquivo [eslintrc](./.eslintrc).

Code format CSS está utilizando stylelint para chegagem dos arquivos css, com base nas regras estipuladas no arquivo [stylelintrc](./.stylelintrc).

Antes de qualquer commit faça a checagem do seu código, se não quiser que seu pull request seja rejeitado.

## CSS PATTERNS

Todo o estilo será baseado em **css-modules**, definindo estilos de escopo local para cada componente com sua respectiva folha de estilo, os estilos iram utilizar definições globais dentro do diritório __src/theme/__.

- **componentes:** Componentes react devem ser representados no padrão PascalCase:
```css=
.MyComponent {
  padding: 20px;
}
```

- **variaveis de escopo global:** devem ser definidas em __src/theme/__, são definidas nas categorias __measures__, __colors__, __effects__ e __typography__.

- **variaveis de escopo local:** estas devem ser definidas no proprio arquivo de estilo do componente, devendo ser iniciado pelo nome do componente seguido do caracter '_'(underline) apos o identificador. Ex:

```css=
.MyComponent {
  --my-component_background: #ff00ff;
  --my-component_pad: 20px;
}
```

- **filhos:** Elementos filhos dentro de um componente devem ser nomenclaturados no padrão camelCase. Ex:
```css=
.MyComponent .childElements {
  background: red;
}

.MyComponent .childElements {
  color: blue;
}
```

- **modificadores:** Elementos que modificam a aparencia de uma elemento, ou classe ja estilizada, devem ser nomenclaturados com o prefixo `_`(underline) para elementos modularizados e `__`(dois underlines) para elementos globais. Ex:
```css=
.MyComponent {
  background: red;
}

/* modificador local */
.MyComponent._modify {
  background: blue;
}

/* modificador global */
.MyComponent.__modify {
  background: blue;
}
```
- **resets:** Modificador global para elementos que devem ter definições de estilo removidas.

## test
Não usamos [jest](https://facebook.github.io/jest/) como plataforma de testes. escreva seus testes e caso tenha duvidas não deixe de ver a documentação dos pacotes que estão sendo usados para escrever testes. Os mocks devem ser escritos com [sinon](http://sinonjs.org) e [nock](https://github.com/nock/nock).

**diretorio**: todos os testes devem ser contidos dentro do diretório ```__tests__``` que estará vinculado ao diretório de mesmo escopo das features que sao desenvolvidas, acompanhado de um diretório ```__mocks__``` que ira conter todos os [mocks](https://pt.wikipedia.org/wiki/Objeto_Mock).

**padrões de mensagens**

- __arquivos__: todos os testes devem ser separados da seguinte forma, primeiro pelo nome do arquivo que deve ser o mesmo nome do modulo ou classe testada seguida pelo sulfixo ```.mock.js```.

- __funções/métodos__: Os metodos ou funções testados devem ser contidos dentro de uma função [describe](https://facebook.github.io/jest/docs/en/api.html#describename-fn), que terá como argumento ```name``` o nome da função ou metodo. 

- __resultados/excessões__: cada resultado ou excessão esperada deve estar contida em um [test](https://facebook.github.io/jest/docs/en/api.html#testname-fn-timeout) tendo como name a descrição do resultado ou excessão espearda de acordo com os argumentos passados ou estado em qual esse se encontra.

```javascript
// soma.test.js
import soma from '../soma';

describe('soma', () => {
  const wrapper = soma(32, 12);
  
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('result', () => {
    expect(wrapper).toEqual(44);
  });
});
```
