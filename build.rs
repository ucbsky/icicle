use std::env;

fn main() {
    //TODO: check cargo features selected
    //TODO: can conflict/duplicate with make ?

    println!("cargo:rerun-if-env-changed=CXXFLAGS");
    println!("cargo:rerun-if-changed=./icicle");

    let stream_type = env::var("DEFAULT_STREAM").unwrap_or(String::from("legacy"));

    let mut stream = String::from("-default-stream=");
    stream.push_str(&stream_type);

    let mut nvcc = cc::Build::new();

    if cfg!(feature = "g2") {
        nvcc.define("G2_DEFINED", None);
    }
    nvcc.cuda(true);
    nvcc.debug(false);
    nvcc.flag(&stream);
    nvcc.files(["./icicle/curves/index.cu"]);
    nvcc.compile("ingo_icicle"); //TODO: extension??
}
