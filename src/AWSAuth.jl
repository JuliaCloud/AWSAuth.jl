module AWSAuth

export SignatureV4

include("signaturev4.jl")

using .SignatureV4

end # module
