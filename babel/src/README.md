# 安装babel
========================
1. npm install --save-dev  babel-core babel-preset-es2015 babel-preset-latest
   >这个文件安装完之后会自动生成一个node_modules的文件夹;
2. 在跟目录下创建配置文件.babelrc
   > {"presets": ["es5015","latest"], "plugins": [ ]}
3. 全局安装babel-cli 
   > 如果是Windows系统请用-管理员权限-打开
   > nmp install -g  babel-cli
   > babel --version 检查babel-cli版本
4. 通过babel + 需要编译的文件的正确路径 进行编译哦
   > 这种编译方式,模块化的文件和引入方式是不识别的