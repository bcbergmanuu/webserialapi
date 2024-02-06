Qualtrics.SurveyEngine.addOnload(function()
{
	this.questionclick = function(event,element){
        //for a single answer multiple choice question, the element type will be radio
        if (element.type == 'radio')
        {
			debugger;
            var choiceNum = element.id.split('~')[2];
			portWrite(choiceNum);
        }
    }

});

Qualtrics.SurveyEngine.addOnReady(function()
{
	implementButton();

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/
	

});