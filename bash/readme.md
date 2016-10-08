# Основы командной строки

## Добавить алиасы

```sh
## Extended list directory contents
alias ll='ls -alF'

## macOS only: show/hide dotfiles
## (we can't see e.g. .gitignore in macOS by default)
alias showDotFiles='defaults write com.apple.finder AppleShowAllFiles YES; killall Finder /System/Library/CoreServices/Finder.app'
alias hideDotFiles='defaults write com.apple.finder AppleShowAllFiles NO; killall Finder /System/Library/CoreServices/Finder.app'
```

## SSH
[SSH](https://ru.wikipedia.org/wiki/SSH) — это защищенный протокол, который позволяет работать на удаленной машине. В баше мы набираем команду для соединения с указанием пользователя и хоста: `ssh vasya@192.168.3.22` и получаем доступ к командной строке удаленной ЭВМ.

Для соединения с сервером по [SSH] используется команда `ssh username@host`. Например, `ssh vasya@192.168.3.22` и далее вводится пароль.

[Архивирование](http://www.howtogeek.com/248780/how-to-compress-and-extract-files-using-the-tar-command-on-linux/) в командной строке Linux выполняется командой `tar`.

Для [копирования](http://www.hypexr.org/linux_scp_help.php) файлов по SSH есть команда `scp`.

Чтобы лучше понять работу с SSH, нужно выполнить практическое задание:

* На своей машине в каталоге `var/tmp` создайте каталог `week1/` и текстовый файл `week1/ssh.txt` с текстом `Hello from [ВАШ IP]`. Эта папка нужна для хранения всяких временных штук: логов, кешэй и пр.
* Заарихваруйте каталог `week1/` в файл `week1.tar.gz` с применением утилиты `tar` и с `gzip`-сжатием.
* Соединитесь по протоколу SSH с любым комьютером в офисной локальной сети или в интернете (нужно узнать IP или адрес, имя пользователя и пароль). Будьте аккуратны, ничего не удаляйте ничего лишнего и не переносите. Вам с этими людьми еще работать.
* Далее, уже в терминале SSH перейдите в папку `/var/tmp` на машине, с которой вы соединились.
* Создайте папку с именем, как в вашей корпоративной почте. Напирмер, `amiskov`.
* Скопируйте в эту папку архив, который вы создали.
* Распакуйте архив.