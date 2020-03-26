# JupyterSparkExt Widget
 
## Features and Functionalities:
**1. Auto searching of active Cluster on Local System:**
<br />
&nbsp;&nbsp; The jupyterlab widget server extension by default upon activation starts fetching for the active spark clusters and its application on the localhost with ports ranging 4040 :4049. Or manually providing a choice of port
<br />
**2. Auto searching of active Cluster on Remote System:**
<br />
&nbsp;&nbsp;The jupyterlab widget server extension provides a slot to insert master node DNS which starts fetching for the active spark clusters on the remote system and its application with ports ranging 4040 :4049,  or manually providing a choice of port.
<br />
**3. Summarising and presenting Spark Applications’ Context**
<br />
&nbsp;&nbsp;The extensions summarises the fetched spark clusters’ and their metadata, which the user could directly copy from, to get connected to their choice of spark application.
<br />
**4. Rendering Applications Spark UI of choice**
<br />
	&nbsp;&nbsp;Another main feature is to provide access to the SparksUI for monitoring, of any application on the local system or even of  the remote system, on the extension itself. The extensions Web-Scraps the SparkUI and forward-proxy all the inherited links to the extension’s base URI so that it can be IFramed on the extension itself. 
<br />
## System Components:
**Dynamic Interactive UI:**
<br />
&nbsp;&nbsp;Pardon me for the present UI. The UI so far, dynamically manages to handle IFrame window resolution based upon user access.
<br />
**Server Extension for programmatic APIs :**
<br />
	&nbsp;&nbsp;This enables us to render a  python package that sustains all the programmed scripts and web-scraping using  Request Handlers like tornado. Reduces complexity on JS. 
  <br />
**IFrames with Proxy Server by WebScrapping**
<br />
&nbsp;&nbsp;In order to render a webapp directly onto the widget and provide the embedded links of the webapp, WebScrapping enables developers to proxy forward them and customise the webapp. 
<br />
**Pyspark for python - spark cluster programmatic Integration**
<br />
**Spark Cluster deployment**

## Showcasing Prerequisites :
**Time Series:**<br />
&nbsp;00:00 &nbsp;Pyspark to python environment for python spark programmatic apis<br />
&nbsp;00:16 &nbsp;Spark cluster setting up<br />
&nbsp;00:34 &nbsp;Spark environment setting up in .bash_profile<br />
&nbsp;00:56 &nbsp;Deploying Multiple Spark Cluster and spark applications <br />
&nbsp;02:25 &nbsp;Launching JupyterLab widget extension: JupyterSparkExt<br />
&nbsp;04:40 &nbsp;Projecting same on Jupiter lab extension<br />
&nbsp;05:12 &nbsp;Rendering sparkUI for port of choice. <br />
&nbsp;6:05  &nbsp;With Help of Summary connecting with pyspark context<br />


## Development Steps:
### Spark Cluster on standalone:
**pythonic spark library**<br />
`pip install pyspark`<br />
**Spark Cluster**<br />
`wget https://downloads.apache.org/spark/spark-3.0.0-preview2/`<br />
`tar xfvz spark-3.0.0-preview2-bin-hadoop3.2`<br />
`cd spark-3.0.0-preview2-bin-hadoop3.2`<br />
**Open Terminal or go to system environment and add:**<br />
`vi .bash_profile`<br />
`export SPARK_HOME=~/spark-3.0.0-preview2-bin-hadoop3.2`<br />
`export PATH=$SPARK_HOME/bin:$PATH`<br />
`export PYSPARK_PYTHON=python3`<br />
`#export PYSPARK_DRIVER_PYTHON="jupyter"`<br />
`#export SPARK_LOCAL_IP="0.0.0.0"`<br />
`#export PYSPARK_DRIVER_PYTHON_OPTS="notebook --no-browser --port=8888”`<br />
`source bash_profile`<br />
**test**<br />
 `echo $SPARK_HOME`<br />
 `pyspark`

### Spark Cluster with multiple local systems:
Configure router for traffic on port 80<br />
sudo apt-get install openssh-server openssh-client<br />
ssh-keygen -t rsa -P ""<br />
open .ssh/id_rsa.pub (of master) and copy content to .ssh/authorized_keys into  all the wokers as well as master<br />
Follow above mentioned steps in all the systems<br />
***on Master Node only:***<br />
`sudo vi /etc/hosts`<br />
Append below lines:<br />
`<MASTER-IP> master`<br />
`<SLAVE01-IP> worker01`<br />
`<SLAVE02-IP> worker02`<br />
`ssh worker01`<br />
`ssh worker02`<br />
`vi $SPARK_HOME/conf/spark-env.sh`<br />
`export SPARK_MASTER_HOST="<MASTER-IP>"`<br />
`sudo vi $SPARK_HOME/conf/slaves`<br />
`master`<br />
`worker01`<br />
`worker02`<br />


 

### Spark Cluster on cloud AWS:
`sudo apt-get install awscli`<br />
`aws configure set aws_access_key_id <aws_access_key_id>`<br />
`aws configure set aws_secret_access_key <aws_secret_access_key>`<br />
`aws configure set region <region>`<br />
`python3 launch_emr_cloudspakr.py`<br />


### Spark Multi-Cluster with multiple application using terminal:
Open Terminal<br />
Deploying cluster 1 spark application 1<br />
`pyspark —master local[0] —name c1_app1`<br />
Deploying cluster 1 spark application 2<br />
`pyspark —master local[0] —name c1_app2`<br />
Deploying cluster 2 spark application 1<br />
`pyspark —master local[1] —name c2_app1`<br />
Deploying cluster 2 spark application 2<br />
`pyspark —master local[1] —name c2_app2`



### Jupyter Spark Widget Installation:

**Application Server Extension:**
<br />
`git clone `<br />
`cd JupyterSparkExt`<br />
`pip install ~/JupyterSparkExt --pre`<br />
`jupyter serverextension enable --py spark_ui_tab --sys-prefix`<br />
<br />
**Rendering Widget:**
<br />
`jupyter labextension install . --no-build`<br />
`jupyter labextension link .`<br />
`jupyter lab / jupyter lab --watch`<br />







  
