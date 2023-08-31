import Code from '@/components/Code'
import styles from '../layout.module.css';

export function generateMetadata() {
  return {
    title: 'Задание для подростков',
  };
}

const code1 = `{ … ( … ) … }`;

const code2 = `( … ( … ) … { … ( … ) … ( … ) … } … )`;

const code3 = `( … ( … ( … ) … )`;

const code4 = 
`goodStr = '((a)(b)(c)d)'; // Здесь все хорошо
badStr = '((a)(b)(c)d))'; // А здесь ошибка в скобках`;

const code5 = 
`function isGood(str) {
  for (let char of str) {

  }
}`;

const code6 = 
`function isGood(str) {
  for (let char of str) {
    if (char == '(') {
      
    }
    else if (char == ')') {
    
    }
  }
}`;

const code7 = 
`function isGood(str) {
  let count = 0;

  for (let char of str) {
    if (char == '(') {
      
    }
    else if (char == ')') {
    
    }
  }
}`;

const code8 =
`function isGood(str) {
  let count = 0;

  for (let char of str) {
    if (char == '(') {

    }
    else if (char == ')') {

    }
  }

  if (          ) {
    return true;
  }
  return false;
}`;

export default function Task() {
  return (
    <>
      <h1 className={styles.title}>Задание для подростков</h1>
      <p className={styles.text}>В&nbsp;программировании мы&nbsp;часто встречаемся со&nbsp;скобками: круглыми, фигурными, квадратными. В&nbsp;языке JavaScript в&nbsp;круглых скобках записываются аргументы функции или, например, условия. Фигурные скобки ограничивают тело функции. Квадратные скобки нужны для доступа к&nbsp;элементам массива или объекта.</p>
      <p className={styles.text}>Скобки в&nbsp;программе всегда парные. Если у&nbsp;нас есть открывающая скобка, то&nbsp;где-то должна быть и&nbsp;закрывающая. Такие пары скобок могут вкладываться друг в&nbsp;друга. Например, так:</p>
      <Code>{code1}</Code>
      <p className={styles.text}>Или так:</p>
      <Code>{code2}</Code>
      <p className={styles.text}>То, что находится между скобок, сейчас нас не&nbsp;интересует.</p>
      <p className={styles.text}>Если где-то не&nbsp;нашлось закрывающей или открывающей скобки, программа не&nbsp;будет работать. Вот здесь получим ошибку:</p>
      <Code>{code3}</Code>
      <p className={styles.text}>Мы&nbsp;напишем функцию на&nbsp;JavaScript, которая определяет, правильно&nbsp;ли написана условная &laquo;программа&raquo;, то&nbsp;есть все&nbsp;ли в&nbsp;порядке со&nbsp;скобками. Для простоты в&nbsp;&laquo;программе&raquo; будет одна строка и&nbsp;только круглые скобки. Вот две строки:</p>
      <Code>{code4}</Code>
      <p className={styles.text}>Напишем функцию isGood, которая берет строку str и&nbsp;в&nbsp;цикле for перебирает ее&nbsp;по&nbsp;одному символу:</p>
      <Code>{code5}</Code>
      <p className={styles.text}>Как нам определить, все&nbsp;ли хорошо со&nbsp;скобками в&nbsp;строке? Подумай, какой здесь может быть алгоритм. Что нам нужно подсчитать? И&nbsp;как в&nbsp;конце сделать вывод, есть в&nbsp;строке ошибки или нет?</p>
      <p className={styles.text}>Наша функция должна что-то делать (запоминать), когда встречает открывающую скобку: ( и&nbsp;когда закрывающую: ). Напишем эти условия:</p>
      <Code>{code6}</Code>
      <p className={styles.text}>Создадим переменную count, которую будем использовать в&nbsp;цикле для учета наших скобок. Пусть в&nbsp;начале она равна нулю:</p>
      <Code>{code7}</Code>
      <p className={styles.text}>Теперь твоя задача&nbsp;&mdash; написать эту функцию полностью. Если скобки в&nbsp;строке расставлены правильно, нужно вернуть результат true. А&nbsp;если есть ошибка&nbsp;&mdash; вернуть false:</p>
      <Code>{code8}</Code>
    </>
  );
}
