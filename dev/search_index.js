var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "AWSAuth.jl",
    "title": "AWSAuth.jl",
    "category": "page",
    "text": "DocTestSetup = :(using AWSAuth, HTTP)\nCurrentModule = AWSAuth"
},

{
    "location": "#AWSAuth.SignatureV4.AWS4AuthLayer",
    "page": "AWSAuth.jl",
    "title": "AWSAuth.SignatureV4.AWS4AuthLayer",
    "category": "type",
    "text": "AWS4AuthLayer{Next} <: HTTP.Layer\n\nAbstract type used by HTTP.request to add an AWS Signature v4 authentication layer to the request.\n\n\n\n\n\n"
},

{
    "location": "#HTTP.request",
    "page": "AWSAuth.jl",
    "title": "HTTP.request",
    "category": "function",
    "text": "HTTP.request(::Type{AWS4AuthLayer}, url::HTTP.URI, req::HTTP.Request, body) -> HTTP.Response\n\nPerform the given request, adding a layer of AWS authentication using AWS Signature v4. An \"Authorization\" header to the request.\n\n\n\n\n\n"
},

{
    "location": "#AWSAuth.SignatureV4.sign_aws4!",
    "page": "AWSAuth.jl",
    "title": "AWSAuth.SignatureV4.sign_aws4!",
    "category": "function",
    "text": "sign_aws4!(method::String, url::HTTP.URI, headers::HTTP.Headers, body; kwargs...)\n\nAdd an \"Authorization\" header to headers, modifying it in place. The header contains a computed signature based on the given credentials as well as metadata about what was used to compute the signature. For more information, see the AWS documentation on the Signature v4 process.\n\nKeyword arguments\n\nAll keyword arguments to this function are optional, as they have default values.\n\nbody_sha256: A precomputed SHA-256 sum of body\nbody_md5: A precomputed MD5 sum of body\ntimestamp: The timestamp used in request signing (defaults to now in UTC)\naws_service: The AWS service for the request (determined from the URL)\naws_region: The AWS region for the request (determined from the URL)\naws_access_key_id: AWS access key (read from the environment)\naws_secret_access_key: AWS secret access key (read from the environment)\naws_session_token: AWS session token (read from the environment, or empty)\ntoken_in_signature: Use aws_session_token when computing the signature (true)\ninclude_md5: Add the \"Content-MD5\" header to headers (true)\ninclude_sha256: Add the \"x-amz-content-sha256\" header to headers (true)\n\n\n\n\n\n"
},

{
    "location": "#AWSAuth.jl-1",
    "page": "AWSAuth.jl",
    "title": "AWSAuth.jl",
    "category": "section",
    "text": "The AWSAuth package implements AWS authentication. Currently this consists of AWS Signature v4 signing for HTTP requests sent to AWS.AWSAuth.AWS4AuthLayer\nAWSAuth.SignatureV4.HTTP.request\nAWSAuth.SignatureV4.sign_aws4!"
},

]}
