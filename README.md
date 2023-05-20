# 概要
　このリポジトリはCodespaceでflutterの開発をする際のテンプレート用で作成したものです。
 
# .devcontainer
 .devcontainerディレクトリ内に、devcontainer.jsonという名前のファイルを作成します。このファイルは、Codespaceの構成を定義するためのものです。

```
{
  "name": "Flutter Development",
  "image": "",
  "extensions": ["dart-code.dart-code", "dart-code.flutter"],
  "settings": {
    "dart.sdkPath": "/usr/lib/dart"
  },
  "forwardPorts": [8080, 8888]
}
```

# 使い方

## 1.Codespaceの起動:
 　Codespacesにアクセスし、対象のリポジトリを開きます。
　リポジトリ内にある.devcontainer/devcontainer.jsonファイルを使用して、Codespaceを起動します。

## 2.VS Codeのセットアップ:
　Codespaceが起動したら、ウェブ上のVS Codeエディタを使用して開発作業を行います。
　初回起動時には、VS Codeの拡張機能が自動的にインストールされます。もしインストールされない場合は、FlutterとDartの拡張機能を手動でインストールしてください。

## 3.Flutterプロジェクトの作成:
　ターミナルを開き、Flutterプロジェクトを作成するためのコマンドを実行します。例えば、以下のコマンドで新しいプロジェクトを作成します。

```
flutter create my_app
```

## 4.プロジェクトの実行:

　作成したFlutterプロジェクトのディレクトリに移動し、ターミナルで以下のコマンドを実行します。

```
flutter run
```

　これにより、デバッグモードでアプリが実行されます。

## 5.コードの編集とデバッグ:

　VS Codeのエディタを使用して、Flutterプロジェクトのコードを編集します。
　変更したコードを保存すると、自動的にHot Reloadがトリガーされ、アプリがリロードされます。
　デバッグのためにブレークポイントを設定し、デバッガを使用することもできます。

## 6.プロジェクトのビルドとデプロイ:

FlutterプロジェクトをビルドしてAPK(Android)やIPA(iOS)ファイルを生成するには、ターミナルで以下のコマンドを実行します。

```
flutter build apk  // Androidの場合
flutter build ios  // iOSの場合
```

ビルドが成功すると、対応するプラットフォーム向けのファイルが生成されます。
