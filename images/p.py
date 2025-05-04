from huggingface_hub import HfApi, HfFolder

# Save your token
HfFolder.save_token('foobarbaz')

api = HfApi()

# Upload files
api.upload_file(
    path_or_fileobj="path/to/your_large_file.txt",
    path_in_repo="large_file.txt",
    repo_id="username/dataset_name",
    repo_type="dataset"
)
