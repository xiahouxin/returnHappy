
/**
 * Knn算法组件
 *
 * @author Chenzh
 * @email imchenzh@foxmail.com
 */
// @Component
// public class KnnComponent {


    let bookTagMapper;  //BookTagMapper

    /**
     * 推荐关键信息的数量
     */
    const RECOMMEND_COUNT = 10;

    /**
     * 获取所有书本标签的样本集
     *
     * @return 样本集
     */
    function obtainSampleSet() {
        // 将所有书本id和书本标签对应起来放到map集合中
        let bookTags = bookTagMapper.findAllBookTagsExceptNum();
        let sampleSet = new Map();
        for (let bookTag of bookTags) {
            let labels = bookTag.getLabel().split(",");
            sampleSet.set(bookTag.getBid(), labels);
        }
        return sampleSet;
    }

    /**
     * 获取10本推荐的书籍的id
     *
     * @param testSet 书籍的测试集
     * @return 10本书籍的id
     */
    function  obtainTenRecommendBids(testSet) {
        let sampleSet = obtainSampleSet();

        // 将测试集拆分成bid集合和label集合
        let testLabels = new Set();
        let testBids = new Array();
        for (let key of testSet.keys()) {
            testBids.add(key);
            Collections.addAll(testLabels, testSet.get(key));
        }

        let baseCount = testLabels.length;

        // 将每本书的标签和测试集的标签进行比较，得到与测试集标签的重复率
        // 将当前书本的id和重复率放入map集合中
        let distance = 0;
        let repetitiveRate = new Map();
        for (let key of sampleSet.keys()) {
            if (testBids.contains(key)) {
                continue;
            }
            let count = 0;
            let tempLabels = new Set(testLabels);
            for (let sampleLabel of sampleSet.get(key)) {
                if (!tempLabels.add(sampleLabel)) {
                    count++;
                }
            }
            distance = 1.0 - (count / baseCount);
            repetitiveRate.put(key, distance);
        }

        // 将距离按从近到远排序
       let repetitiveRateValue = new Array(repetitiveRate.entries());
        // repetitiveRateValue.sort(Map.Entry.comparingByValue());
        let recommendBids = new Array();
        for (let i = 0; i < RECOMMEND_COUNT; i++) {
            recommendBids.add(repetitiveRateValue.get(i).getKey());
        }
        return recommendBids;
    }