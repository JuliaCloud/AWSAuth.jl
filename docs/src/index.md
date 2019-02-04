```@meta
DocTestSetup = :(using AWSAuth, HTTP)
CurrentModule = AWSAuth
```

# AWSAuth.jl

The AWSAuth package implements AWS authentication.
Currently this consists of AWS Signature v4 signing for HTTP requests sent to AWS.

```@docs
AWSAuth.AWS4AuthLayer
AWSAuth.SignatureV4.HTTP.request
AWSAuth.SignatureV4.sign!
```
