const output = []

const pridictionPoint = 300 ;
const K = 3;

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  // Ran every time a balls drops into a bucket
  output.push([dropPosition,bounciness,size,bucketLabel]);

}

function runAnalysis() {
  // Write code here to analyze stuff

  const bucket= _.chain(output)
  .map(row => [distance(row[0]),row[3]])
  .sortBy(row=> row[0])
  .slice(0,K)
  .countBy(row=> row[1])
  .toPairs()
  .sortBy(row => row[1])
  .last()
  .first()
  .parseInt();
  console.log(`you ball will fall into the bucket ${bucket}`);
}

function distance(point){
  return Math.abs(point - pridictionPoint)
 }

 // initial implementation  KNN
 // use only drop potion and ignore bounciness and Size

 //Question if we drop a ball on 300px which bucket it wil drop 
 //Solution Approach :  drop multiple balls all over the place and record the data in which bucket it falls
 // for each of the observation subtract the drop point of each observation by 300px and take absolute value of the result// take magnitude of a number
 // DropPosition    Abs(DropPosition -300)  Bucket
 // 0               300                     #1
 //150              150                     #2 
 //275              25                      #3
 //325              25                      #4 etc

 //sort the table on low to high for "Abs(DropPosition -300)"
 // observation most similar to data we wand will be on top and observation least similar data we wand will be on bottom 
 // look at top K records (K is 1st L of KNN), +ve int that tell us to look at top record // find most common record // there is no strict rule to find K





