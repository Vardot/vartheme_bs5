## Install Needed Tools Command

1. Open a terminal window.
2. Change directory in the terminal to `docroot/themes/contrib/vartheme_bs5/scripts` in the project.
3. Run the `bash ./install-needed-tools.sh`
4. Follow with the list of instructions.

```
cd PROJECT_DIR_NAME/docroot/themes/contrib/vartheme_bs5/scripts
bash ./install-needed-tools.sh
```

## Install Needed Tools Manually

### **1. Install** [**sed**](https://www.gnu.org/software/sed/manual/sed.html) **and** [**gawk**](https://www.gnu.org/software/gawk/manual/gawk.html)

Helps with string replace and re-naming files.

```
sudo apt install -y sed gawk;
```

### **2. Install npm** and [**nodejs**](https://nodejs.org/en/)

 Helps getting more development tools and the **Bootstrap** and **popper** packages. 

```
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt update
sudo apt install nodejs
sudo apt install build-essential

curl -L https://npmjs.com/install.sh | sudo -E bash -
sudo apt update
sudo apt install npm
```

### 3. Install [Yarn](https://yarnpkg.com/getting-started)

```
sudo apt install yarn
```

Install **Yarn** as a global by **npm**

```
sudo npm install -g yarn
```
