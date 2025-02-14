# Amazon Transcribe

[Amazon Transcribe](https://aws.amazon.com/transcribe/) is an automatic speech recognition (ASR) service that makes it easy for you to add speech-to-text capabilities to your applications. Starting today, when transcribing audio streams, you can instruct Amazon Transcribe to automatically mask, remove, or tag specific terms in the transcription results based on a vocabulary that you specify. For example, you can use a vocabulary filter to automatically remove profane words from the transcription results for content moderation or generating family-friendly captions. You can create a vocabulary filter once and use it when processing multiple audio streams. You can also create multiple vocabulary filters and choose which one should be used for a particular audio stream. With this launch, vocabulary filtering is now available for both Amazon Transcribe's batch and streaming transcription APIs.

You can use streaming transcription to efficiently and accurately generate transcripts for diverse use cases, such as transcribing calls for contact centers, automatically generating captions for live media broadcasts, and capturing meeting notes for business productivity.

Vocabulary filtering is available for streaming transcription at no additional cost in all the [AWS regions](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/) where Amazon Transcribe streaming service is available. To learn more, visit the Amazon Transcribe [documentation page.](https://docs.aws.amazon.com/transcribe/latest/dg/filter-unwanted-words.html)

## Amazon Transcribe Call Analytics

Amazon Transcribe Call Analytics is a tool that can transcribe call audio, analyze sentiment, and perform quality assurance on customer service and sales calls. It uses machine learning and speech-to-text models to help improve customer experience and agent productivity.

### Features

- **Call transcription**: Transcribes audio into text, including multi-speaker audio
- **Sentiment analysis**: Analyzes the sentiment of the customer or agent
- **Call categorization**: Classifies calls based on criteria like sentiment, phrases, or interruptions
- **Call summarization**: Summarizes a call to capture key information
- **Sensitive information redaction**: Detects and removes sensitive information like names, addresses, and credit card information

### Quality assurance

- **Quality training programs**: Uses insights from call analytics to create targeted training programs
- **Adherence to standards**: Helps ensure that agents adhere to standards

### How to use

- You can use the AWS Management Console, AWS Command Line Interface (AWS CLI), or AWS SDK
- You can create a Lambda function and IAM policy
- You can create an Amazon S3 bucket to store the audio file
- You can use the Transcribe API to generate a transcript
- You can use the Amazon Comprehend API to analyze the transcription text

[Amazon Transcribe Call Analytics](https://aws.amazon.com/transcribe/call-analytics/)

[Amazon Transcribe Pricing – Amazon Web Services (AWS)](https://aws.amazon.com/transcribe/pricing/)

## Post-call insights / Analytics

[GitHub - aws-samples/amazon-transcribe-post-call-analytics](https://github.com/aws-samples/amazon-transcribe-post-call-analytics)

Call Analytics provides post-call analyses, which are useful for monitoring customer service trends.

### Call characteristics

Include talk time, non-talk time, speaker loudness, interruptions, talk speed, issues, outcomes, and action items

The call characteristics feature measures the quality of agent-customer interactions using these criteria:

- **Interruption**: Measures if and when one participant cuts off the other participant mid-sentence. Frequent interruptions may be associated with rudeness or anger, and could correlate to negative sentiment for one or both participants.
- **Loudness**: Measures the volume at which each participant is speaking. Use this metric to see if the caller or the agent is speaking loudly or yelling, which is often indicative of being upset. This metric is represented as a normalized value (speech level per second of speech in a given segment) on a scale from 0 to 100, where a higher value indicates a louder voice.
- **Non-talk time**: Measures periods of time that do not contain speech. Use this metric to see if there are long periods of silence, such as an agent keeping a customer on hold for an excessive amount of time.
- **Talk speed**: Measures the speed at which both participants are speaking. Comprehension can be affected if one participant speaks too quickly. This metric is measured in words per minute.
- **Talk time**: Measures the amount of time (in milliseconds) each participant spoke during the call. Use this metric to help identify if one participant is dominating the call or if the dialogue is balanced.
- **Issues, Outcomes, and Action Items**: Identifies issues, outcomes and action items from the call transcript.

Here's an [output example](https://docs.aws.amazon.com/transcribe/latest/dg/tca-output-batch.html#tca-output-characteristics-batch).

### Generative call summarization

Creates a concise summary of the entire call

Generative call summarization creates a concise summary of the entire call, capturing key components such as reason for the call, steps taken to resolve issue, and next steps.

Using generative call summarization, you can:

- Reduce the need for manual note-taking during and after calls.
- Improve agent efficiency as they can spend more time talking to callers waiting in queue rather than engaging in after-call work.
- Speed up supervisor reviews as call summaries are much quicker to review than entire transcripts.

To use generative call summarization with a post-call analytics job, see [Enabling generative call summarization](https://docs.aws.amazon.com/transcribe/latest/dg/tca-enable-summarization.html). For example output, see [Generative call summarization output example](https://docs.aws.amazon.com/transcribe/latest/dg/tca-output-batch.html#tca-output-summarization-batch). Generative call summarization is priced separately (please refer to [pricing page](https://aws.amazon.com/transcribe/pricing)).

### Custom categorization

Rules that you can use to hone in on specific keywords and criteria

Use call categorization to flag keywords, phrases, sentiment, or actions within a call. Our categorization options can help you triage escalations, such as negative-sentiment calls with many interruptions, or organize calls into specific categories, such as company departments.

The criteria you can add to a category include:

- **Non-talk time**: Periods of time when neither the customer nor the agent is talking.
- **Interruptions**: When the customer or the agent is interrupting the other person.
- **Customer or agent sentiment**: How the customer or the agent is feeling during a specified time period. If at least 50 percent of the conversation turns (the back-and-forth between two speakers) in a specified time period match the specified sentiment, Amazon Transcribe considers the sentiment a match.
- **Keywords or phrases**: Matches part of the transcription based on an exact phrase. For example, if you set a filter for the phrase "I want to speak to the manager", Amazon Transcribe filters for that _exact_ phrase.

You can also flag the inverse of the previous criteria (talk time, lack of interruptions, a sentiment not being present, and the lack of a specific phrase).

Here's an [output example](https://docs.aws.amazon.com/transcribe/latest/dg/tca-output-batch.html#tca-output-categorization-batch).

For more information on categories or to learn how to create a new category, see [Creating categories for post-call transcriptions](https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html).

### Sensitive data redaction

Text transcript and your audio file

Sensitive data redaction replaces personally identifiable information (PII) in the text transcript and the audio file. A redacted transcript replaces the original text with `[PII]`; a redacted audio file replaces spoken personal information with silence. This parameter is useful for protecting customer information.

Here is an [output example](https://docs.aws.amazon.com/transcribe/latest/dg/tca-output-batch.html#tca-output-pii-redact-batch).

### Sentiment analysis

Sentiment analysis estimates how the customer and agent are feeling throughout the call. This metric is represented as both a quantitative value (with a range from `5` to `-5`) and a qualitative value (`positive`, `neutral`, `mixed`, or `negative`). Quantitative values are provided per quarter and per call; qualitative values are provided per turn.

This metric can help identify if your agent is able to delight an upset customer by the time the call ends.

Sentiment analysis works out-of-the-box and thus doesn't support customization, such as model training or custom categories.

Here's an [output example](https://docs.aws.amazon.com/transcribe/latest/dg/tca-output-batch.html#tca-output-sentiment-batch).

### Links

- [Post-call analytics - Amazon Transcribe](https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics-batch.html)
- [Post-call analytics output - Amazon Transcribe](https://docs.aws.amazon.com/transcribe/latest/dg/tca-output-batch.html)

## Toxic Speech Detection

Toxic speech detection is ==the use of artificial intelligence (AI) to identify and flag harmful language in online communications==. It helps to keep online spaces safe and inclusive by flagging toxic content like hate speech, harassment, and threats.

### How it works

- **Classification** - Toxic speech detection is a classification task that identifies whether a comment is toxic, or what type of toxic comment it is.
- **Machine learning** - Machine learning models like logistic regression, support vector machines (SVM), and random forests are used to detect toxic speech.
- **Deep learning** - Deep learning models like convolutional neural networks (CNN), multi-layer perceptrons (MLP), and long short-term memory (LSTM) are used to detect toxic speech.
- **Audio and text** - Some models use both audio and text-based cues to detect toxic speech. For example, Amazon Transcribe Toxicity Detection uses speech cues like pitch and tone in addition to text.

### Benefits

- Helps to keep online spaces safe and inclusive
- Helps moderators to quickly and efficiently manage discourse on their platforms
- Helps to minimize the volume of data that must be manually processed

### Amazon Transcribe

Toxic speech is tagged and categorized in your transcription output. Each instance of toxic speech is categorized and assigned a confidence score (a value between 0 and 1. A larger confidence value indicates a greater likelihood that the content is toxic speech within the specified category.

```json
{
    "jobName": "my-toxicity-job",
    "accountId": "111122223333",
    "results": {
        "transcripts": [...],
        "items":[...],
        "toxicity_detection": [
            {
                "text": "What the * are you doing man? That's why I didn't want to play with your * .  man it was a no, no I'm not calming down * man. I well I spent I spent too much * money on this game.",
                "toxicity": 0.7638,
                "categories": {
                    "profanity": 0.9913,
                    "hate_speech": 0.0382,
                    "sexual": 0.0016,
                    "insult": 0.6572,
                    "violence_or_threat": 0.0024,
                    "graphic": 0.0013,
                    "harassment_or_abuse": 0.0249
                },
                "start_time": 8.92,
                "end_time": 21.45
            },
            Items removed for brevity
            {
                "text": "What? Who? What the * did you just say to me? What's your address? What is your * address? I will pull up right now on your * * man. Take your * back to , tired of this **.",
                "toxicity": 0.9816,
                "categories": {
                    "profanity": 0.9865,
                    "hate_speech": 0.9123,
                    "sexual": 0.0037,
                    "insult": 0.5447,
                    "violence_or_threat": 0.5078,
                    "graphic": 0.0037,
                    "harassment_or_abuse": 0.0613
                },
                "start_time": 43.459,
                "end_time": 54.639
            },
        ]
    },
    ...
    "status": "COMPLETED"
}
```

[Using toxic speech detection - Amazon Transcribe](https://docs.aws.amazon.com/transcribe/latest/dg/toxicity-using.html)
