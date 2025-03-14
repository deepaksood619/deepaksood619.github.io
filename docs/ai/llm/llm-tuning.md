# LLM Tuning

The process of adapting a model to a new domain or set of custom use cases by training the model on new data

## Fine Tuning

Large language model (LLM) fine-tuning is the process of taking pre-trained models and further training them on smaller, specific datasets to refine their capabilities and improve performance in a particular task or domain. Fine-tuning is about turning general-purpose models and turning them into specialized models. It bridges the gap between generic pre-trained models and the unique requirements of specific applications, ensuring that the language model aligns closely with human expectations.

### LoRA

- Introduce two low-rank matrices, A and B, to work alongside the weight matrix W.
- Adjust these matrices instead of the behemoth W, making updates manageable.

### LoRA-FA (Frozen-A)

- Takes LoRA a step further by freezing matrix A.
- Only matrix B is tweaked, reducing the activation memory needed.

### VeRA

- All about efficiency: matrices A and B are fixed and shared across all layers.
- Focuses on tiny, trainable scaling vectors in each layer, making it super memory-friendly.

### Delta-LoRA

- A twist on LoRA: adds the difference (delta) between products of matrices A and B across training steps to the main weight matrix W.
- Offers a dynamic yet controlled approach to parameter updates.

### LoRA+

- An optimized variant of LoRA where matrix B gets a higher learning rate. This tweak leads to faster and more effective learning.

![5 Techniques to fine-tune LLMs](../../media/Screenshot%202025-03-10%20at%2012.37.42%20PM.jpg)
trr

## Supervised fine-tuning (SFT)

Supervised fine-tuning means updating a pre-trained language model using labeled data to do a specific task. The data used has been checked earlier. This is different from unsupervised methods, where data isn't checked. Usually, the initial training of the language model is unsupervised, but fine-tuning is supervised.

## Methods for fine-tuning LLMs

- Instruction fine-tuning
- Full fine-tuning
- Parameter-efficient fine-tuning (PEFT)
	- [LLM (Parameter Efficient) Fine Tuning - Explained! - YouTube](https://www.youtube.com/watch?v=HcVtpLAGMXo)

## Links

- [Fine-tuning large language models (LLMs) in 2024 | SuperAnnotate](https://www.superannotate.com/blog/llm-fine-tuning)
- [Pruning Aware Training(PAT) in LLMs - by Bugra Akyildiz](https://mlops.substack.com/p/pruning-aware-trainingpat-in-llms)
- [Generative AI Fine Tuning LLM Models Crash Course - YouTube](https://www.youtube.com/watch?v=t-0s_2uZZU0)
