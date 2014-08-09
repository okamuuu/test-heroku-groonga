これは何?
========

heroku で node + groonga を使おうと思ったら上手く行かなかったので再現できるようにレポジトリを用意しました。

再現方法
=======

環境構築

```
git clone https://github.com/okamuuu/test-heroku-groonga .
cd test-heroku-groonga
heroku create
heroku config:add BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-multi.git
git push heroku master
```

コマンド実行

```
json だと返事するが(ちなむと tsv も返事する)

```
% heroku run '~/vendor/groonga/bin/groonga ~/groonga/database status --output_type json'   
Running `~/vendor/groonga/bin/groonga ~/groonga/database status --output_type json` attached to terminal... up, run.4295
[[0,1407550261.92818,0.000120878219604492],{"alloc_count":139,"starttime":1407550261,"uptime":0,"version":"4.0.4","n_queries":0,"cache_hit_rate":0.0,"command_version":1,"default_command_version":1,"max_command_version":2}]
```

msgpack だと返事がない

```
% heroku run '~/vendor/groonga/bin/groonga ~/groonga/database status --output_type msgpack'
Running `~/vendor/groonga/bin/groonga ~/groonga/database status --output_type msgpack` attached to terminal... up, run.1978
```
