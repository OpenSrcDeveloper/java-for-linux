## 构建数据

![](https://tcs.teambition.net/storage/31211664d0c95d6bc6f692f10a97c6278fce?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxMDcwMjkxMCwiaWF0IjoxNjEwMDk4MTEwLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjExNjY0ZDBjOTVkNmJjNmY2OTJmMTBhOTdjNjI3OGZjZSJ9.uSw8gc5fpeugjMpoQJAP5-xzjwdGblO9JHdlPXKok4U&download=image.png "")

```java
/**
     * 不建议使用 ElasticsearchTemplate 对索引进行管理（创建索引，更新索引，删除索引）
     * 索引就像是数据库或者数据库中的表，我们平时是不会通过Java代码频繁的去创建修改删除数据库或者表的
     * 我们只会针对数据做CRUD的操作
     * 在es中也是同理，我们尽量使用 ElasticsearchTemplate 对文档数据做CRUD的操作
     * 1. 属性（FieldType）类型不灵活
     * 2. 主分片与副本分片数无法设置
     */
    @Test
    public void createIndexStu() {

        // 第一次会先创建索引 第二次以后只会新增数据
        Stu stu = new Stu();
        stu.setStuId(1004L);
        stu.setName("bat man");
        stu.setAge(34);
        stu.setMoney(999.8f);
        stu.setSign("save Gotham");
        stu.setDescription("be a bat man");
        // spring boot 会自动帮我们创建IndexQuery 只要把对象传入进行就行了
        IndexQuery indexQuery = new IndexQueryBuilder().withObject(stu).build();
        // 创建索引
        elasticsearchTemplate.index(indexQuery);

    }

```

```java
/**
     * 不建议使用 ElasticsearchTemplate 对索引进行管理（创建索引，更新索引，删除索引）
     * 索引就像是数据库或者数据库中的表，我们平时是不会通过Java代码频繁的去创建修改删除数据库或者表的
     * 我们只会针对数据做CRUD的操作
     * 在es中也是同理，我们尽量使用 ElasticsearchTemplate 对文档数据做CRUD的操作
     * 1. 属性（FieldType）类型不灵活
     * 2. 主分片与副本分片数无法设置
     */
    @Test
    public void createIndexStu() {

        // 第一次会先创建索引 第二次以后只会新增数据
        Stu stu = new Stu();
        stu.setStuId(1005L);
        stu.setName("iron man");
        stu.setAge(54);
        stu.setMoney(1999.8f);
        stu.setSign("I am iron man");
        stu.setDescription("I have a iron army");
        // spring boot 会自动帮我们创建IndexQuery 只要把对象传入进行就行了
        IndexQuery indexQuery = new IndexQueryBuilder().withObject(stu).build();
        // 创建索引
        elasticsearchTemplate.index(indexQuery);

    }

```

```java
/**
     * 不建议使用 ElasticsearchTemplate 对索引进行管理（创建索引，更新索引，删除索引）
     * 索引就像是数据库或者数据库中的表，我们平时是不会通过Java代码频繁的去创建修改删除数据库或者表的
     * 我们只会针对数据做CRUD的操作
     * 在es中也是同理，我们尽量使用 ElasticsearchTemplate 对文档数据做CRUD的操作
     * 1. 属性（FieldType）类型不灵活
     * 2. 主分片与副本分片数无法设置
     */
    @Test
    public void createIndexStu() {

        // 第一次会先创建索引 第二次以后只会新增数据
        Stu stu = new Stu();
        stu.setStuId(1002L);
        stu.setName("spider man");
        stu.setAge(23);
        stu.setMoney(56.8f);
        stu.setSign("I am green arrow");
        stu.setDescription("save the city");
        // spring boot 会自动帮我们创建IndexQuery 只要把对象传入进行就行了
        IndexQuery indexQuery = new IndexQueryBuilder().withObject(stu).build();
        // 创建索引
        elasticsearchTemplate.index(indexQuery);

    }

```

```java
/**
     * 不建议使用 ElasticsearchTemplate 对索引进行管理（创建索引，更新索引，删除索引）
     * 索引就像是数据库或者数据库中的表，我们平时是不会通过Java代码频繁的去创建修改删除数据库或者表的
     * 我们只会针对数据做CRUD的操作
     * 在es中也是同理，我们尽量使用 ElasticsearchTemplate 对文档数据做CRUD的操作
     * 1. 属性（FieldType）类型不灵活
     * 2. 主分片与副本分片数无法设置
     */
    @Test
    public void createIndexStu() {

        // 第一次会先创建索引 第二次以后只会新增数据
        Stu stu = new Stu();
        stu.setStuId(1001L);
        stu.setName("spider man");
        stu.setAge(22);
        stu.setMoney(18.8f);
        stu.setSign("i am spider man");
        stu.setDescription("i wish i am spider man");
        // spring boot 会自动帮我们创建IndexQuery 只要把对象传入进行就行了
        IndexQuery indexQuery = new IndexQueryBuilder().withObject(stu).build();
        // 创建索引
        elasticsearchTemplate.index(indexQuery);

    }


```

```java
/**
     * 不建议使用 ElasticsearchTemplate 对索引进行管理（创建索引，更新索引，删除索引）
     * 索引就像是数据库或者数据库中的表，我们平时是不会通过Java代码频繁的去创建修改删除数据库或者表的
     * 我们只会针对数据做CRUD的操作
     * 在es中也是同理，我们尽量使用 ElasticsearchTemplate 对文档数据做CRUD的操作
     * 1. 属性（FieldType）类型不灵活
     * 2. 主分片与副本分片数无法设置
     */
    @Test
    public void createIndexStu() {

        // 第一次会先创建索引 第二次以后只会新增数据
        Stu stu = new Stu();
        stu.setStuId(1003L);
        stu.setName("spider man");
        stu.setAge(28);
        stu.setMoney(99.8f);
        stu.setSign("i am super woman's husband");
        stu.setDescription("save world");
        // spring boot 会自动帮我们创建IndexQuery 只要把对象传入进行就行了
        IndexQuery indexQuery = new IndexQueryBuilder().withObject(stu).build();
        // 创建索引
        elasticsearchTemplate.index(indexQuery);

    }

```

![](https://tcs.teambition.net/storage/312104c9c5cda0b56eca63deedec142e6d3c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxMDcwMjkxMCwiaWF0IjoxNjEwMDk4MTEwLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjEwNGM5YzVjZGEwYjU2ZWNhNjNkZWVkZWMxNDJlNmQzYyJ9.JiGBH-AmDvs1uLDp1yd7ioWd7e80E8DKO0cemoIrCSM&download=image.png "")

## queryForPage 分页查询

## SearchQuery就是搜索条件

## NativeSearchQueryBuilder 原生的查询条件

## withQuery 添加请求的Query 搜索条件 

## MQ 匹配查询

## name 是key | field

## text 就是数据

## Pageable 可携带分页的

## PageRequest 生成分页的条件

## page 从第几页开始分

## size每页显示10条数据

## AggregatedPage 包含分页信息的内容

## getContent 文档数据

![](https://tcs.teambition.net/storage/3121c3cbdc7796c7f4ddf911ca611e058082?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxMDcwMjkxMCwiaWF0IjoxNjEwMDk4MTEwLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjFjM2NiZGM3Nzk2YzdmNGRkZjkxMWNhNjExZTA1ODA4MiJ9.3ZuFeb5x49Pydf1Zjz6o5oBICFXwKCZ2yU1mfMssVBs&download=image.png "")

```java
@Test
    public void searchStuDoc() {

        Pageable pageable = PageRequest.of(0, 10);

        SearchQuery searchQuery = new NativeSearchQueryBuilder()
                .withQuery(QueryBuilders.matchQuery("description", "save man"))
                .withPageable(pageable)
                .build();

        AggregatedPage<Stu> pagedStu = elasticsearchTemplate.queryForPage(searchQuery,Stu.class);

        System.out.println(pagedStu.getTotalPages());

        List<Stu> stuList = pagedStu.getContent();

        for (Stu stu : stuList) {
            System.out.println(stu);
        }
    }

```

```text
/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/bin/java -ea -Didea.test.cyclic.buffer.size=1048576 -javaagent:/Users/virtualman/Library/Application Support/JetBrains/Toolbox/apps/IDEA-U/ch-0/203.6682.168/IntelliJ IDEA.app/Contents/lib/idea_rt.jar=54218:/Users/virtualman/Library/Application Support/JetBrains/Toolbox/apps/IDEA-U/ch-0/203.6682.168/IntelliJ IDEA.app/Contents/bin -Dfile.encoding=UTF-8 -classpath /Users/virtualman/Library/Application Support/JetBrains/Toolbox/apps/IDEA-U/ch-0/203.6682.168/IntelliJ IDEA.app/Contents/lib/idea_rt.jar:/Users/virtualman/Library/Application Support/JetBrains/Toolbox/apps/IDEA-U/ch-0/203.6682.168/IntelliJ IDEA.app/Contents/plugins/junit/lib/junit5-rt.jar:/Users/virtualman/Library/Application Support/JetBrains/Toolbox/apps/IDEA-U/ch-0/203.6682.168/IntelliJ IDEA.app/Contents/plugins/junit/lib/junit-rt.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/charsets.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/deploy.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/cldrdata.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/dnsns.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/jaccess.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/jfxrt.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/localedata.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/nashorn.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/sunec.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/sunjce_provider.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/sunpkcs11.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/zipfs.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/javaws.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/jce.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/jfr.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/jfxswt.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/jsse.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/management-agent.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/plugin.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/resources.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/jre/lib/rt.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/lib/ant-javafx.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/lib/dt.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/lib/javafx-mx.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/lib/jconsole.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/lib/packager.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/lib/sa-jdi.jar:/Users/virtualman/Downloads/temp/jdk1.8.0_181.jdk/Contents/Home/lib/tools.jar:/Users/virtualman/IdeaProjects/java-for-linux/foodie-dev/foodie-dev-search/target/test-classes:/Users/virtualman/IdeaProjects/java-for-linux/foodie-dev/foodie-dev-search/target/classes:/Users/virtualman/.m2/repository/org/springframework/boot/spring-boot-starter-data-elasticsearch/2.2.2.RELEASE/spring-boot-starter-data-elasticsearch-2.2.2.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/data/spring-data-elasticsearch/3.1.8.RELEASE/spring-data-elasticsearch-3.1.8.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/spring-context/5.1.7.RELEASE/spring-context-5.1.7.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/spring-tx/5.1.7.RELEASE/spring-tx-5.1.7.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/data/spring-data-commons/2.1.8.RELEASE/spring-data-commons-2.1.8.RELEASE.jar:/Users/virtualman/.m2/repository/joda-time/joda-time/2.10.2/joda-time-2.10.2.jar:/Users/virtualman/.m2/repository/org/elasticsearch/client/transport/6.4.3/transport-6.4.3.jar:/Users/virtualman/.m2/repository/org/elasticsearch/elasticsearch/6.4.3/elasticsearch-6.4.3.jar:/Users/virtualman/.m2/repository/org/elasticsearch/elasticsearch-core/6.4.3/elasticsearch-core-6.4.3.jar:/Users/virtualman/.m2/repository/org/elasticsearch/elasticsearch-secure-sm/6.4.3/elasticsearch-secure-sm-6.4.3.jar:/Users/virtualman/.m2/repository/org/elasticsearch/elasticsearch-x-content/6.4.3/elasticsearch-x-content-6.4.3.jar:/Users/virtualman/.m2/repository/com/fasterxml/jackson/dataformat/jackson-dataformat-smile/2.9.8/jackson-dataformat-smile-2.9.8.jar:/Users/virtualman/.m2/repository/com/fasterxml/jackson/dataformat/jackson-dataformat-yaml/2.9.8/jackson-dataformat-yaml-2.9.8.jar:/Users/virtualman/.m2/repository/com/fasterxml/jackson/dataformat/jackson-dataformat-cbor/2.9.8/jackson-dataformat-cbor-2.9.8.jar:/Users/virtualman/.m2/repository/org/apache/lucene/lucene-core/7.4.0/lucene-core-7.4.0.jar:/Users/virtualman/.m2/repository/org/apache/lucene/lucene-analyzers-common/7.4.0/lucene-analyzers-common-7.4.0.jar:/Users/virtualman/.m2/repository/org/apache/lucene/lucene-backward-codecs/7.4.0/lucene-backward-codecs-7.4.0.jar:/Users/virtualman/.m2/repository/org/apache/lucene/lucene-grouping/7.4.0/lucene-grouping-7.4.0.jar:/Users/virtualman/.m2/repository/org/apache/lucene/lucene-highlighter/7.4.0/lucene-highlighter-7.4.0.jar:/Users/virtualman/.m2/repository/org/apache/lucene/lucene-join/7.4.0/lucene-join-7.4.0.jar:/Users/virtualman/.m2/repository/org/apache/lucene/lucene-memory/7.4.0/lucene-memory-7.4.0.jar:/Users/virtualman/.m2/repository/org/apache/lucene/lucene-misc/7.4.0/lucene-misc-7.4.0.jar:/Users/virtualman/.m2/repository/org/apache/lucene/lucene-queries/7.4.0/lucene-queries-7.4.0.jar:/Users/virtualman/.m2/repository/org/apache/lucene/lucene-queryparser/7.4.0/lucene-queryparser-7.4.0.jar:/Users/virtualman/.m2/repository/org/apache/lucene/lucene-sandbox/7.4.0/lucene-sandbox-7.4.0.jar:/Users/virtualman/.m2/repository/org/apache/lucene/lucene-spatial/7.4.0/lucene-spatial-7.4.0.jar:/Users/virtualman/.m2/repository/org/apache/lucene/lucene-spatial-extras/7.4.0/lucene-spatial-extras-7.4.0.jar:/Users/virtualman/.m2/repository/org/apache/lucene/lucene-spatial3d/7.4.0/lucene-spatial3d-7.4.0.jar:/Users/virtualman/.m2/repository/org/apache/lucene/lucene-suggest/7.4.0/lucene-suggest-7.4.0.jar:/Users/virtualman/.m2/repository/org/elasticsearch/elasticsearch-cli/6.4.3/elasticsearch-cli-6.4.3.jar:/Users/virtualman/.m2/repository/net/sf/jopt-simple/jopt-simple/5.0.2/jopt-simple-5.0.2.jar:/Users/virtualman/.m2/repository/com/carrotsearch/hppc/0.7.1/hppc-0.7.1.jar:/Users/virtualman/.m2/repository/com/tdunning/t-digest/3.2/t-digest-3.2.jar:/Users/virtualman/.m2/repository/org/hdrhistogram/HdrHistogram/2.1.9/HdrHistogram-2.1.9.jar:/Users/virtualman/.m2/repository/org/apache/logging/log4j/log4j-api/2.11.2/log4j-api-2.11.2.jar:/Users/virtualman/.m2/repository/org/elasticsearch/jna/4.5.1/jna-4.5.1.jar:/Users/virtualman/.m2/repository/org/elasticsearch/plugin/reindex-client/6.4.3/reindex-client-6.4.3.jar:/Users/virtualman/.m2/repository/org/elasticsearch/client/elasticsearch-rest-client/6.4.3/elasticsearch-rest-client-6.4.3.jar:/Users/virtualman/.m2/repository/org/apache/httpcomponents/httpclient/4.5.8/httpclient-4.5.8.jar:/Users/virtualman/.m2/repository/org/apache/httpcomponents/httpcore/4.4.11/httpcore-4.4.11.jar:/Users/virtualman/.m2/repository/org/apache/httpcomponents/httpasyncclient/4.1.4/httpasyncclient-4.1.4.jar:/Users/virtualman/.m2/repository/org/apache/httpcomponents/httpcore-nio/4.4.11/httpcore-nio-4.4.11.jar:/Users/virtualman/.m2/repository/org/elasticsearch/plugin/lang-mustache-client/6.4.3/lang-mustache-client-6.4.3.jar:/Users/virtualman/.m2/repository/com/github/spullara/mustache/java/compiler/0.9.3/compiler-0.9.3.jar:/Users/virtualman/.m2/repository/org/elasticsearch/plugin/percolator-client/6.4.3/percolator-client-6.4.3.jar:/Users/virtualman/.m2/repository/org/elasticsearch/plugin/parent-join-client/6.4.3/parent-join-client-6.4.3.jar:/Users/virtualman/.m2/repository/org/elasticsearch/plugin/rank-eval-client/6.4.3/rank-eval-client-6.4.3.jar:/Users/virtualman/.m2/repository/com/fasterxml/jackson/core/jackson-core/2.9.8/jackson-core-2.9.8.jar:/Users/virtualman/.m2/repository/com/fasterxml/jackson/core/jackson-databind/2.9.8/jackson-databind-2.9.8.jar:/Users/virtualman/.m2/repository/org/elasticsearch/plugin/transport-netty4-client/6.4.3/transport-netty4-client-6.4.3.jar:/Users/virtualman/.m2/repository/io/netty/netty-buffer/4.1.36.Final/netty-buffer-4.1.36.Final.jar:/Users/virtualman/.m2/repository/io/netty/netty-codec/4.1.36.Final/netty-codec-4.1.36.Final.jar:/Users/virtualman/.m2/repository/io/netty/netty-codec-http/4.1.36.Final/netty-codec-http-4.1.36.Final.jar:/Users/virtualman/.m2/repository/io/netty/netty-resolver/4.1.36.Final/netty-resolver-4.1.36.Final.jar:/Users/virtualman/.m2/repository/org/springframework/boot/spring-boot-starter-test/2.1.5.RELEASE/spring-boot-starter-test-2.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/boot/spring-boot-test/2.1.5.RELEASE/spring-boot-test-2.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/boot/spring-boot-test-autoconfigure/2.1.5.RELEASE/spring-boot-test-autoconfigure-2.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/com/jayway/jsonpath/json-path/2.4.0/json-path-2.4.0.jar:/Users/virtualman/.m2/repository/net/minidev/json-smart/2.3/json-smart-2.3.jar:/Users/virtualman/.m2/repository/net/minidev/accessors-smart/1.2/accessors-smart-1.2.jar:/Users/virtualman/.m2/repository/org/ow2/asm/asm/5.0.4/asm-5.0.4.jar:/Users/virtualman/.m2/repository/junit/junit/4.12/junit-4.12.jar:/Users/virtualman/.m2/repository/org/assertj/assertj-core/3.11.1/assertj-core-3.11.1.jar:/Users/virtualman/.m2/repository/org/mockito/mockito-core/2.23.4/mockito-core-2.23.4.jar:/Users/virtualman/.m2/repository/net/bytebuddy/byte-buddy/1.9.12/byte-buddy-1.9.12.jar:/Users/virtualman/.m2/repository/net/bytebuddy/byte-buddy-agent/1.9.12/byte-buddy-agent-1.9.12.jar:/Users/virtualman/.m2/repository/org/objenesis/objenesis/2.6/objenesis-2.6.jar:/Users/virtualman/.m2/repository/org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.jar:/Users/virtualman/.m2/repository/org/hamcrest/hamcrest-library/1.3/hamcrest-library-1.3.jar:/Users/virtualman/.m2/repository/org/skyscreamer/jsonassert/1.5.0/jsonassert-1.5.0.jar:/Users/virtualman/.m2/repository/com/vaadin/external/google/android-json/0.0.20131108.vaadin1/android-json-0.0.20131108.vaadin1.jar:/Users/virtualman/.m2/repository/org/springframework/spring-core/5.1.7.RELEASE/spring-core-5.1.7.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/spring-jcl/5.1.7.RELEASE/spring-jcl-5.1.7.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/spring-test/5.1.7.RELEASE/spring-test-5.1.7.RELEASE.jar:/Users/virtualman/.m2/repository/org/xmlunit/xmlunit-core/2.6.2/xmlunit-core-2.6.2.jar:/Users/virtualman/.m2/repository/javax/xml/bind/jaxb-api/2.3.1/jaxb-api-2.3.1.jar:/Users/virtualman/.m2/repository/javax/activation/javax.activation-api/1.2.0/javax.activation-api-1.2.0.jar:/Users/virtualman/.m2/repository/org/springframework/boot/spring-boot-starter/2.1.5.RELEASE/spring-boot-starter-2.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/boot/spring-boot/2.1.5.RELEASE/spring-boot-2.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/boot/spring-boot-autoconfigure/2.1.5.RELEASE/spring-boot-autoconfigure-2.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/javax/annotation/javax.annotation-api/1.3.2/javax.annotation-api-1.3.2.jar:/Users/virtualman/.m2/repository/org/yaml/snakeyaml/1.23/snakeyaml-1.23.jar:/Users/virtualman/.m2/repository/org/springframework/boot/spring-boot-starter-web/2.1.5.RELEASE/spring-boot-starter-web-2.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/boot/spring-boot-starter-json/2.1.5.RELEASE/spring-boot-starter-json-2.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/com/fasterxml/jackson/datatype/jackson-datatype-jdk8/2.9.8/jackson-datatype-jdk8-2.9.8.jar:/Users/virtualman/.m2/repository/com/fasterxml/jackson/datatype/jackson-datatype-jsr310/2.9.8/jackson-datatype-jsr310-2.9.8.jar:/Users/virtualman/.m2/repository/com/fasterxml/jackson/module/jackson-module-parameter-names/2.9.8/jackson-module-parameter-names-2.9.8.jar:/Users/virtualman/.m2/repository/org/springframework/boot/spring-boot-starter-tomcat/2.1.5.RELEASE/spring-boot-starter-tomcat-2.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/org/apache/tomcat/embed/tomcat-embed-core/9.0.19/tomcat-embed-core-9.0.19.jar:/Users/virtualman/.m2/repository/org/apache/tomcat/embed/tomcat-embed-el/9.0.19/tomcat-embed-el-9.0.19.jar:/Users/virtualman/.m2/repository/org/apache/tomcat/embed/tomcat-embed-websocket/9.0.19/tomcat-embed-websocket-9.0.19.jar:/Users/virtualman/.m2/repository/org/hibernate/validator/hibernate-validator/6.0.16.Final/hibernate-validator-6.0.16.Final.jar:/Users/virtualman/.m2/repository/javax/validation/validation-api/2.0.1.Final/validation-api-2.0.1.Final.jar:/Users/virtualman/.m2/repository/org/jboss/logging/jboss-logging/3.3.2.Final/jboss-logging-3.3.2.Final.jar:/Users/virtualman/.m2/repository/org/springframework/spring-web/5.1.7.RELEASE/spring-web-5.1.7.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/spring-beans/5.1.7.RELEASE/spring-beans-5.1.7.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/spring-webmvc/5.1.7.RELEASE/spring-webmvc-5.1.7.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/spring-expression/5.1.7.RELEASE/spring-expression-5.1.7.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/boot/spring-boot-starter-aop/2.1.5.RELEASE/spring-boot-starter-aop-2.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/spring-aop/5.1.7.RELEASE/spring-aop-5.1.7.RELEASE.jar:/Users/virtualman/.m2/repository/org/aspectj/aspectjweaver/1.9.4/aspectjweaver-1.9.4.jar:/Users/virtualman/.m2/repository/org/springframework/boot/spring-boot-configuration-processor/2.1.5.RELEASE/spring-boot-configuration-processor-2.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/mysql/mysql-connector-java/8.0.20/mysql-connector-java-8.0.20.jar:/Users/virtualman/.m2/repository/org/mybatis/spring/boot/mybatis-spring-boot-starter/2.1.0/mybatis-spring-boot-starter-2.1.0.jar:/Users/virtualman/.m2/repository/org/springframework/boot/spring-boot-starter-jdbc/2.1.5.RELEASE/spring-boot-starter-jdbc-2.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/com/zaxxer/HikariCP/3.2.0/HikariCP-3.2.0.jar:/Users/virtualman/.m2/repository/org/springframework/spring-jdbc/5.1.7.RELEASE/spring-jdbc-5.1.7.RELEASE.jar:/Users/virtualman/.m2/repository/org/mybatis/spring/boot/mybatis-spring-boot-autoconfigure/2.1.0/mybatis-spring-boot-autoconfigure-2.1.0.jar:/Users/virtualman/.m2/repository/org/mybatis/mybatis/3.5.2/mybatis-3.5.2.jar:/Users/virtualman/.m2/repository/org/mybatis/mybatis-spring/2.0.2/mybatis-spring-2.0.2.jar:/Users/virtualman/.m2/repository/tk/mybatis/mapper-spring-boot-starter/2.1.5/mapper-spring-boot-starter-2.1.5.jar:/Users/virtualman/.m2/repository/tk/mybatis/mapper-core/1.1.5/mapper-core-1.1.5.jar:/Users/virtualman/.m2/repository/javax/persistence/persistence-api/1.0/persistence-api-1.0.jar:/Users/virtualman/.m2/repository/tk/mybatis/mapper-base/1.1.5/mapper-base-1.1.5.jar:/Users/virtualman/.m2/repository/tk/mybatis/mapper-weekend/1.1.5/mapper-weekend-1.1.5.jar:/Users/virtualman/.m2/repository/tk/mybatis/mapper-spring/1.1.5/mapper-spring-1.1.5.jar:/Users/virtualman/.m2/repository/tk/mybatis/mapper-extra/1.1.5/mapper-extra-1.1.5.jar:/Users/virtualman/.m2/repository/tk/mybatis/mapper-spring-boot-autoconfigure/2.1.5/mapper-spring-boot-autoconfigure-2.1.5.jar:/Users/virtualman/.m2/repository/com/github/pagehelper/pagehelper-spring-boot-starter/1.2.12/pagehelper-spring-boot-starter-1.2.12.jar:/Users/virtualman/.m2/repository/com/github/pagehelper/pagehelper-spring-boot-autoconfigure/1.2.12/pagehelper-spring-boot-autoconfigure-1.2.12.jar:/Users/virtualman/.m2/repository/com/github/pagehelper/pagehelper/5.1.10/pagehelper-5.1.10.jar:/Users/virtualman/.m2/repository/com/github/jsqlparser/jsqlparser/2.0/jsqlparser-2.0.jar:/Users/virtualman/.m2/repository/org/springframework/session/spring-session-data-redis/2.1.6.RELEASE/spring-session-data-redis-2.1.6.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/data/spring-data-redis/2.1.8.RELEASE/spring-data-redis-2.1.8.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/data/spring-data-keyvalue/2.1.8.RELEASE/spring-data-keyvalue-2.1.8.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/spring-oxm/5.1.7.RELEASE/spring-oxm-5.1.7.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/spring-context-support/5.1.7.RELEASE/spring-context-support-5.1.7.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/session/spring-session-core/2.1.6.RELEASE/spring-session-core-2.1.6.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/boot/spring-boot-starter-security/2.1.5.RELEASE/spring-boot-starter-security-2.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/security/spring-security-config/5.1.5.RELEASE/spring-security-config-5.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/security/spring-security-core/5.1.5.RELEASE/spring-security-core-5.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/security/spring-security-web/5.1.5.RELEASE/spring-security-web-5.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/boot/spring-boot-starter-data-redis/2.1.5.RELEASE/spring-boot-starter-data-redis-2.1.5.RELEASE.jar:/Users/virtualman/.m2/repository/io/lettuce/lettuce-core/5.1.6.RELEASE/lettuce-core-5.1.6.RELEASE.jar:/Users/virtualman/.m2/repository/io/netty/netty-common/4.1.36.Final/netty-common-4.1.36.Final.jar:/Users/virtualman/.m2/repository/io/netty/netty-handler/4.1.36.Final/netty-handler-4.1.36.Final.jar:/Users/virtualman/.m2/repository/io/netty/netty-transport/4.1.36.Final/netty-transport-4.1.36.Final.jar:/Users/virtualman/.m2/repository/io/projectreactor/reactor-core/3.2.9.RELEASE/reactor-core-3.2.9.RELEASE.jar:/Users/virtualman/.m2/repository/org/reactivestreams/reactive-streams/1.0.2/reactive-streams-1.0.2.jar:/Users/virtualman/.m2/repository/commons-codec/commons-codec/1.11/commons-codec-1.11.jar:/Users/virtualman/.m2/repository/org/apache/commons/commons-lang3/3.4/commons-lang3-3.4.jar:/Users/virtualman/.m2/repository/commons-io/commons-io/1.3.2/commons-io-1.3.2.jar:/Users/virtualman/.m2/repository/io/springfox/springfox-swagger2/2.4.0/springfox-swagger2-2.4.0.jar:/Users/virtualman/.m2/repository/io/swagger/swagger-annotations/1.5.6/swagger-annotations-1.5.6.jar:/Users/virtualman/.m2/repository/io/swagger/swagger-models/1.5.6/swagger-models-1.5.6.jar:/Users/virtualman/.m2/repository/com/fasterxml/jackson/core/jackson-annotations/2.9.0/jackson-annotations-2.9.0.jar:/Users/virtualman/.m2/repository/io/springfox/springfox-spi/2.4.0/springfox-spi-2.4.0.jar:/Users/virtualman/.m2/repository/io/springfox/springfox-core/2.4.0/springfox-core-2.4.0.jar:/Users/virtualman/.m2/repository/io/springfox/springfox-schema/2.4.0/springfox-schema-2.4.0.jar:/Users/virtualman/.m2/repository/io/springfox/springfox-swagger-common/2.4.0/springfox-swagger-common-2.4.0.jar:/Users/virtualman/.m2/repository/io/springfox/springfox-spring-web/2.4.0/springfox-spring-web-2.4.0.jar:/Users/virtualman/.m2/repository/com/google/guava/guava/18.0/guava-18.0.jar:/Users/virtualman/.m2/repository/com/fasterxml/classmate/1.4.0/classmate-1.4.0.jar:/Users/virtualman/.m2/repository/org/springframework/plugin/spring-plugin-core/1.2.0.RELEASE/spring-plugin-core-1.2.0.RELEASE.jar:/Users/virtualman/.m2/repository/org/springframework/plugin/spring-plugin-metadata/1.2.0.RELEASE/spring-plugin-metadata-1.2.0.RELEASE.jar:/Users/virtualman/.m2/repository/io/springfox/springfox-swagger-ui/2.4.0/springfox-swagger-ui-2.4.0.jar:/Users/virtualman/.m2/repository/com/github/xiaoymin/swagger-bootstrap-ui/1.6/swagger-bootstrap-ui-1.6.jar:/Users/virtualman/.m2/repository/org/slf4j/slf4j-api/1.7.21/slf4j-api-1.7.21.jar:/Users/virtualman/.m2/repository/org/slf4j/slf4j-log4j12/1.7.21/slf4j-log4j12-1.7.21.jar:/Users/virtualman/.m2/repository/log4j/log4j/1.2.17/log4j-1.2.17.jar:/Users/virtualman/.m2/repository/javax/servlet/javax.servlet-api/4.0.1/javax.servlet-api-4.0.1.jar com.intellij.rt.junit.JUnitStarter -ideVersion5 -junit4 com.test.ESTest,searchStuDoc
ERROR StatusLogger Log4j2 could not find a logging implementation. Please add log4j-core to the classpath. Using SimpleLogger to log to the console...

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.1.5.RELEASE)

log4j:WARN No appenders could be found for logger (tk.mybatis.mapper.autoconfigure.MapperAutoConfiguration).
log4j:WARN Please initialize the log4j system properly.
log4j:WARN See http://logging.apache.org/log4j/1.2/faq.html#noconfig for more info.
1
Stu{stuId=1003, name='spider man', age=28, sign='i am super woman's husband', description='save world', money=99.8}
Stu{stuId=1002, name='spider man', age=23, sign='I am green arrow', description='save the city', money=56.8}
Stu{stuId=1004, name='bat man', age=34, sign='save Gotham', description='be a bat man', money=999.8}
Stu{stuId=1001, name='spider man', age=22, sign='i am spider man', description='i wish i am spider man', money=18.8}

```









开源笔记

此笔记在学习的时候做的笔记 所以 没有那么多时间写的很细致或整理排版问题 采用关键帧图片与关键帧文字进行书写 

可 Pull Requests 协作写开源笔记

[gitee](https://gitee.com/opendevel/java-for-linux)

[github](https://github.com/OSrcD/java-for-linux)

[teambition](https://tburl.in/0jDNvpbK)

开源视频

[OSrcD的个人空间 - 哔哩哔哩 ( ゜- ゜)つロ 乾杯~ Bilibili](https://space.bilibili.com/77266754)

开源博客

[全部博文 - OpenDevel的个人空间 - OSCHINA](https://my.oschina.net/u/4675154?tab=newest&catalogId=0)

开源项目

[OSrcD (OpenDevel) - Gitee.com](https://gitee.com/OpenDevel)

[OSrcD - Overview](https://github.com/OSrcD)

开源赞赏

![](https://tcs.teambition.net/storage/3121aed56e96d914e1046f3b498b493ce232?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxMDcwMjkxMCwiaWF0IjoxNjEwMDk4MTEwLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjFhZWQ1NmU5NmQ5MTRlMTA0NmYzYjQ5OGI0OTNjZTIzMiJ9.zbZxyaQD-seKPu6aEk98FUSKJUTrM5Wl9HsrXlY3IGs&download=image.png "")

请勿相信图片中任何联系方式

图片来源于视频 作者拿到视频学习已被第三方打码 没办法 截图也没时间去修改图片 请勿相信图片里的任何联系方式

谢谢

