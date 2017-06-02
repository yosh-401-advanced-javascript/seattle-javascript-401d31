for x in `seq 26 40`;do
  mkdir "class-${x}"
  echo -e "![cf](http://i.imgur.com/7v5ASc8.png) class ${x} \n===\n" >> "./class-${x}/README.md"
done
