import boto3
import json
import datetime

client = boto3.client('organizations')

def lambda_handler(event, context):
    parentId=event['ParentId']
    response = client.list_accounts_for_parent(ParentId=parentId)
    return  json.dumps(response , indent=4 , default=datetime_handler)
        
def datetime_handler(x):
    if isinstance(x, datetime.datetime):
        return x.isoformat()
    raise TypeError("Unknown type")  